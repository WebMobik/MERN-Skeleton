import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#a2cf6e',
            main: '#8bc34a',
            dark: '#618833',
            contrastText: '#000',
        },
        secondary: {
            light: '#0065a3',
            main: '#0091ea',
            dark: '#33a7ee',
            contrastText: '#fff',
        },
        type: 'light'
    }
})

export const formTheme = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleText: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    btnSuccess: {
        color: '#ffffff',
        backgroundColor: '#45b531'
    },
    textField: {
        marginBottom: theme.spacing(2)
    }
}))
