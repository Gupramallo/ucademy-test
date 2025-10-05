import React from 'react'
import { Button, Typography } from '@mui/material'

const PageHeader: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Alumnos</Typography>
      <Button variant="contained">Nuevo alumno</Button>
    </div>
  )
}

export default PageHeader
