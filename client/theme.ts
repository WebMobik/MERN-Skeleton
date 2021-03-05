import { createMuiTheme } from '@material-ui/core/styles'

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
    type: 'light',
  },
})
