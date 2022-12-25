import { Container, Box, Link, Stack, Typography } from '@mui/material'
import { useLocation, Outlet } from 'react-router-dom'

import { themeColor } from '../util/constants'

export default function Header() {
  const location = useLocation()

  const props = { p: 3, width: '100%' }
  const barProps = location.pathname === '/'
    ? { 
      ...props,  
      position: 'absolute',
      backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.1), rgba(35,66,79,1))',
    }
    : { ...props, position: 'sticky', boxShadow: '0 4px 8px 0 rgba(35,66,79,0.2)' }
    const typographyColor = location.pathname === '/' ? 'white' : themeColor

  return (
    <>
      <Box sx={barProps}>
        <Container maxWidth="lg">
          <Stack
            alignItems="flex-end"
            direction="row"
            justifyContent="space-between"
            >
            <Stack alignItems="center">
              <Typography variant="h3" sx={{ color: typographyColor }}>Prometheus</Typography>
              <Typography align="justify" variant="body1" sx={{ color: typographyColor }}>Intellectual Property Law</Typography>
            </Stack>
            <Stack direction="row" spacing={6}>
              <Link color={themeColor} href="/" variant="h6">Home</Link>
              <Link color={themeColor} href="/about" variant="h6">About</Link>
              <Link color={themeColor} href="/services" variant="h6">Services</Link>
              <Link color={themeColor} href="/inquire" variant="h6">Inquire</Link>
              <Link color={themeColor} href="/resources" variant="h6">Resources</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
      {location.pathname === '/'
        ? <Outlet />
        : (
          <Container maxWidth="lg" sx={{ my: 2 }}>
            <Outlet />
          </Container>
        )
      }
    </>
  )
}