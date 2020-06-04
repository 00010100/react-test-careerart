import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import {InputLabel, FormControl, Select, MenuItem} from '@material-ui/core'

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  })
)

const DefaultSelect = ({title, id, data, value, onChange}) => {
  const classes = useStyles()

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={id}>{title}</InputLabel>
      <Select labelId={id} value={value} onChange={onChange}>
        {data.map(item => {
          return (
            <MenuItem key={item.id} value={item.slug}>
              {item.label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default DefaultSelect
