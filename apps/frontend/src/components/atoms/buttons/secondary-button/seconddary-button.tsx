import React from 'react'
import { Button } from './styles'
import type { ButtonProps } from '../types'

const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <Button size="small" onClick={onClick} variant="outlined">
    {label}
  </Button>
)

export default SecondaryButton
