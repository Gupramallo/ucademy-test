import React from 'react'
import { Typography } from '@mui/material'
import MainButton from '@/components/atoms/buttons/main-button'
import type { PageHeaderProps } from './types'

const PageHeader: React.FC<PageHeaderProps> = ({ onClick }) => (
  <div>
    <Typography variant="h4">Alumnos</Typography>
    <MainButton label="Nuevo Alumno" onClick={onClick} />
  </div>
)

export default PageHeader
