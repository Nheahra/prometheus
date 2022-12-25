import { Box, Stack, Typography } from '@mui/material'

import { bio } from '../../util/constants'

export default function About() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Our People</Typography>
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          alt="Robert Headshot"
          src={require('../../images/Headshot.jpg')}
          sx={{ width: 200, mt: 1 }}
        />
        <Stack spacing={2}>
          <Typography variant="h6">Robert Varkonyi, J.D., M.S.</Typography>
          {bio.map((b, i) => <Typography key={i} align="justify" variant="body1">{b}</Typography>)}
        </Stack>
      </Stack>
    </Stack>
  )
}
