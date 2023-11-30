
import {
    Box, TextField, Button, FormControl, List, ListItem, ListItemText, Typography
} from "@mui/material"
import { ChangeEvent, Dispatch, FC, useState } from "react"
import { urlConsultationRNC } from "../api/apiHome";
import { consultRNC } from "../api";
import { ObjRNC } from "../interfaces/TResponseDGII";



interface Props {
    rncValue: string
    setRncValue: Dispatch<React.SetStateAction<string>>;
    rncResponse: ObjRNC;
    setRncResponse: React.Dispatch<React.SetStateAction<ObjRNC>>
}

export const Main: FC<Props> = ({ rncValue, setRncValue, rncResponse, setRncResponse }) => {

    const [showTable, setshowTable] = useState(false)

    const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const inputValue = `${event.target.value}`

        setRncValue(inputValue)
    }

    const handlerClick = async () => {
        const res: ObjRNC = await consultRNC(urlConsultationRNC, rncValue)
        res && setRncResponse(res)

        setshowTable(true)
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" gap={4} padding="1em">

            <Box display="flex" justifyContent="center">
                <FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, marginTop: "2em" }} >
                    <TextField
                        value={rncValue}
                        required
                        id="rnc"
                        label="RNC"
                        placeholder="132000001"
                        fullWidth
                        onChange={handlerChange}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        size="large"
                        sx={{ width: "150px", height: "55px", fontWeight: "bold" }}
                        onClick={handlerClick}
                    >
                        Buscar
                    </Button>
                </FormControl>
            </Box>
            <Box sx={{
                width: "100%", display: "flex", justifyContent: "center"
            }}>
                {
                    showTable && (
                        rncResponse?.RNC ? (
                            <List sx={{ width: "500px", display: "flex", background: "#34495e", borderRadius: "1em", padding: "1.5em" }
                            } >
                                <ListItem sx={{ display: "flex", flexDirection: "column" }} >

                                    <ListItemText sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        primary={"RNC : "}
                                        secondary={rncResponse.RNC}
                                    />
                                    <ListItemText sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        primary={"Razon Social : "}
                                        secondary={rncResponse.Razon_Social}
                                    />
                                    <ListItemText sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        primary={"Nombre Comercial : "}
                                        secondary={rncResponse.Nombre_Comercial}
                                    />
                                    <ListItemText sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        primary={"Regimen de pagos : "}
                                        secondary={rncResponse.Regimen_de_pagos}
                                    />
                                    <ListItemText sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        primary={"Estado : "}
                                        secondary={rncResponse.Estado}
                                    />
                                    <ListItemText sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        primary={"Actividad Economica : "}
                                        secondary={rncResponse.Actividad_Economica}
                                    />
                                    <ListItemText sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        primary={"Administracion Local : "}
                                        secondary={rncResponse.Administracion_Local}
                                    />

                                </ListItem>
                            </List>
                        )
                            :
                            <Box sx={{ marginTop: "4em" }}>
                                <Typography variant="h5" component="h5" color="error">Este RNC no esta en la DGII</Typography>
                            </Box>
                    )
                }

            </Box >
        </Box >

    )
}