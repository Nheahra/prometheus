import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Unstable_Grid2 as Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import { omit } from 'lodash'

export default function RenderInput(props) {
  const { component, size } = props
  const formProps = omit(props, ['component', 'size', 'props'])

  const renderFormField = () => {
    switch(component) {
      // case 'date': 
      // return (
      //   <DatePicker {...formProps} />
      // )
      case 'radio':
        return (
          <FormControl>
            <FormLabel>Time</FormLabel>
            <RadioGroup defaultValue="morning" row>
              <FormControlLabel control={<Radio size="small" />} label="Morning" value="morning" />
              <FormControlLabel control={<Radio size="small" />} label="Afternoon" value="afternoon" />
            </RadioGroup>
          </FormControl>
        )
      case 'textfield':
      default:
        return <TextField fullWidth {...formProps} {...props.props} />
    }
  }

  return (
    <Grid xs={size}>
      {renderFormField()}
    </Grid>
  )
}