import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/pink'
import pink from '@material-ui/core/colors/pink'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default theme