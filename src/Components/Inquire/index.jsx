import { useState } from 'react'
import {
  Box,
  Button,
  Stack,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material'
import { map, mapValues, startCase } from 'lodash'

import RenderInputs from './RenderInputs'
import { form, hours } from '../../util/constants'

export default function Inquire() {
  const [formState, setFormState] = useState(mapValues(form, () => ''))

  const setState = (field, value) => {
    setFormState({ ...formState, [field]: value })
  }

  return (
    <Stack direction="row" justifyContent="space-between" spacing={10}>
      <Stack spacing={2} sx={{ width: '65%'}}>
        <Typography gutterBottom variant="h5">Schedule an Appointment</Typography>
        <Grid container spacing={2}>
          {map(form, (formProps, label) =>
            <RenderInputs
              key={label}
              label={startCase(label)}
              onChange={e => setState(label, e.target.value)}
              rows={formProps.props.multiline ? 4 : 1}
              value={formState[label]}
              {...formProps}
            />
          )}
          <Grid>
            <Button color="primary" variant="contained">Schedule</Button>
          </Grid>
        </Grid>
      </Stack>
      <Box sx={{ width: '35% '}}>
        <Typography gutterBottom variant="h5">Hours</Typography>
        {map(hours, (available, day) => (
          <Stack
            direction="row"
            justifyContent="space-between"
            key={day}
            spacing={7}
            sx={{ mb: 2 }}
          >
            <Typography variant="body1">{day}</Typography>
            <Stack>
            {map(available, a => (
              <Typography align="right" key={a} variant="body1" sx={{ display: 'block' }}>{a}</Typography>
            ))}
            </Stack>
          </Stack>
        ))}
      </Box>
    </Stack>
  )
}
