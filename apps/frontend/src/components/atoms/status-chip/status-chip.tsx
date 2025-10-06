import React from 'react'
import type { StatusChipProps } from './types'
import { Container } from './styles'
import { Typography } from '@mui/material'

const StatusChip: React.FC<StatusChipProps> = ({ isActive }) => (
  <Container isActive={isActive}>
    <Typography variant="body3">{isActive ? 'Activo' : 'Inactivo'}</Typography>
  </Container>
)

export default StatusChip
