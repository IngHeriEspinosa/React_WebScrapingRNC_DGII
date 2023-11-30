import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
    return (
        <Box sx={{ width: "100%", height: "30vh", zIndex: "1000", display: "flex", justifyContent: "center", alignItems: "center", background: "transparent", backdropFilter: "blur(1px)" }}>
            <CircularProgress color="success" />
        </Box>
    )
}