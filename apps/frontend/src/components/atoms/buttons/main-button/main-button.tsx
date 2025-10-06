import React from 'react'
import { Button } from './styles'
import type { ButtonProps } from '../types'
import { Typography } from '@mui/material'

const MainButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  color = 'primary',
  variant = 'button2',
}) => (
  <Button
    disabled={disabled}
    size="small"
    onClick={onClick}
    variant="contained"
    color={color}
  >
    <Typography variant={variant}>{label}</Typography>
  </Button>
)

export default MainButton
