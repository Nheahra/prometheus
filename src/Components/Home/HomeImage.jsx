import { Box, Stack, Typography } from '@mui/material'
import { themeColor } from '../../util/constants'

export default function HomeImage() {
  return (
    <>
      <Box
          component="img"
          alt="Biological Patent"
          src={require('../../images/home_page_cropped_2.jpg')}
          sx={{ 
            width: '100%', 
            // borderBottom: `4px solid ${themeColor}`
          }}
      />
      {/* <Box component="div" sx={{ height: 140, backgroundImage: `linear-gradient(${themeColor}, white)` }} /> */}
      <Stack sx={{ position: 'absolute', top: 150, right: '11%' }}>
        <Typography align="right" variant="h2" sx={{ width: 400, color: themeColor }} >
          Enhancing the Arts and Sciences
        </Typography>
      </Stack>
    </>
  )
}