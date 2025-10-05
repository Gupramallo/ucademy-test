import React from 'react'
import { Button } from './styles'
import type { ButtonProps } from '../types'

const MainButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <Button size="small" onClick={onClick} variant="contained">
    {label}
  </Button>
)

export default MainButton
