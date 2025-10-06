import React from 'react'
import { Typography } from '@mui/material'
import MainButton from '@/components/atoms/buttons/main-button'
import type { PageHeaderProps } from './types'
import { Container } from './styles'

const PageHeader: React.FC<PageHeaderProps> = ({ onClick }) => (
  <Container>
    <Typography variant="h3">Alumnos</Typography>
    <MainButton label="Nuevo Alumno" onClick={onClick} />
  </Container>
)

export default PageHeader
