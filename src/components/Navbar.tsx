import { Box, Typography, Toolbar, AppBar } from '@mui/material'
import './styles/Navbar.css'

export const Navbar = () => {
    return (
        <>
            <AppBar>
                <Toolbar sx={{ display: { sm: "flex" }, justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, padding: "0.6em" }}>
                    <Box>
                        <img className='navbar-img_logo' src="/multicomputos.jpg" />
                    </Box>
                    <Typography variant="h6" fontFamily="inherit">
                        Consulta tu RNC aqui 🔍
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />

        </>
    );
}
