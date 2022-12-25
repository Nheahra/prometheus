import { Container, Stack, Typography } from '@mui/material'

import HomeImage from "./HomeImage"
import { standFor } from '../../util/constants'


export default function Home() {
  return (
    <>
      <HomeImage />
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Stack spacing={2}>
        <Typography variant="h6">What We Stand For</Typography>
          {standFor.map((s, i) => 
            <Typography key={i} align="justify" variant="body1">{s}</Typography>
          )}
        </Stack>
      </Container>
    </>
  )
}