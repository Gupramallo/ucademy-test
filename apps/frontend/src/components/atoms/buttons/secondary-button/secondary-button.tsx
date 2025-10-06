import React from 'react'
import { Button } from './styles'
import type { ButtonProps } from '../types'
import { Typography } from '@mui/material'

const SecondaryButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'button2',
}) => (
  <Button size="small" onClick={onClick} variant="outlined">
    <Typography variant={variant}>{label}</Typography>
  </Button>
)

export default SecondaryButton
