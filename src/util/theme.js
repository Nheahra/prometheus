import { createTheme } from '@mui/material/styles'
import { themeColor } from './constants'


export default createTheme({
  palette: {
    primary: {
      main: themeColor,
    },
  },
});