import { Link, Stack, Typography } from '@mui/material'
import { themeColor } from '../../util/constants'

export default function Header() {
  return (
    <Stack
      alignItems="baseline"
      direction="row"
      justifyContent="space-around"
      sx={{
        p: 3,
        position: 'absolute',
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.1), rgba(35,66,79,1))',
        width: '100%'
      }}>
      <Stack alignItems="center">
        <Typography variant="h3" sx={{ color: "white" }}>Prometheus</Typography>
        <Typography variant="body1" sx={{ color: "white" }}>Intellectual Property Law</Typography>
      </Stack>
      <Stack direction="row" spacing={6}>
        <Link color={themeColor} href="/" variant="h6">Home</Link>
        <Link color={themeColor} href="/" variant="h6">About</Link>
        <Link color={themeColor} href="/" variant="h6">Services</Link>
        <Link color={themeColor} href="/" variant="h6">Contact Us</Link>
      </Stack>
    </Stack>
  )
}