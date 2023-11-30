import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#2c3e50',
        },
        primary: {
            main: '#bdc3c7',
        },
        secondary: {
            main: '#61dafbaa',
        },
        error: {
            main: '#c0392b',
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: { elevation: 0, position: 'sticky' },
            styleOverrides: {
                root: {
                    backgroundColor: '#34495e',
                },
            },
        },
    },
});