import {
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import { map, startCase } from 'lodash'

import { providedServices } from '../../util/constants'

export default function Services() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Services</Typography>
      {map(providedServices, (description, service) => (
        <Card key={service}>
          <CardContent>
            <Typography gutterBottom variant="h6">{startCase(service)}</Typography>
            {map(description, d => <Typography gutterBottom variant="body2">{d}</Typography>)}
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}