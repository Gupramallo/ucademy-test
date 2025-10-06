import React from 'react'
import { Button } from './styles'
import type { ButtonProps } from '../types'

const MainButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  color = 'primary',
}) => (
  <Button
    disabled={disabled}
    size="small"
    onClick={onClick}
    variant="contained"
    color={color}
  >
    {label}
  </Button>
)

export default MainButton
