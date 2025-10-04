import React, { useState } from 'react'
import Layout from '../templates/layout'
import { Pagination, Stack, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getUsersQuery } from '@/shared/queries/get-users-queries'
import UsersTable from '../organisms/users-table'
import { Container } from './styles'

const MainPage: React.FC = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useQuery(getUsersQuery({ page }))

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    setPage(page)

  return (
    <Layout>
      <Container>
        <div>
          <Typography variant="h4">Alumnos</Typography>
        </div>
        <UsersTable users={data?.users ?? []} isLoading={isLoading} />
        {data?.pagination && (
          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <Pagination
              count={data.pagination.totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Stack>
        )}
      </Container>
    </Layout>
  )
}

export default MainPage
