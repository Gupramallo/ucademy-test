import React from 'react'
import { Stack } from './styles'
import { Pagination as PaginationComponent } from '@mui/material'
import { PaginationProps } from './types'

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  page,
  onChange,
}) => (
  <Stack direction="row" justifyContent="center">
    <PaginationComponent
      count={totalPages}
      page={page}
      onChange={onChange}
      color="primary"
      size="large"
    />
  </Stack>
)

export default Pagination
