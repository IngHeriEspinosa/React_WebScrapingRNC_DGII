import { useState } from "react";
import { Navbar } from "../components/Navbar"
import { Main } from "../components/Main";
import { ObjRNC } from "../interfaces/TResponseDGII";

const Home = () => {

    const [rncValue, setRncValue] = useState<string>("")
    const [rncResponse, setRncResponse] = useState<ObjRNC>({
        RNC: "",
        Razon_Social: "",
        Nombre_Comercial: "",
        Regimen_de_pagos: "",
        Estado: "",
        Actividad_Economica: "",
        Administracion_Local: "",
    })

    return (
        <>
            <Navbar />
            <Main setRncValue={setRncValue} rncValue={rncValue} rncResponse={rncResponse} setRncResponse={setRncResponse} />
        </>
    )
}
export default Home