import React from 'react'
import { Button } from './styles'
import type { ButtonProps } from '../types'

const MainButton: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <Button
    disabled={disabled}
    size="small"
    onClick={onClick}
    variant="contained"
  >
    {label}
  </Button>
)

export default MainButton
