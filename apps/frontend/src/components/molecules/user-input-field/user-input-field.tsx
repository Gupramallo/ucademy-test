import React from 'react'
import TextField from '@mui/material/TextField'
import { Container } from './styles'
import { Typography } from '@mui/material'
import type { UserInputFieldProps } from './types'

const UserInputField: React.FC<UserInputFieldProps> = ({
  title,
  register,
  fieldKey,
  rules,
  error,
  type = 'text',
  helperText,
  required,
}) => (
  <Container>
    <Typography variant="caption">{title}</Typography>
    <TextField
      size="small"
      type={type}
      fullWidth
      error={error}
      helperText={helperText}
      required={required}
      {...register(fieldKey, rules)}
    />
  </Container>
)

export default UserInputField
