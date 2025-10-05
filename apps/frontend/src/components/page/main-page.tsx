import React, { useState } from 'react'
import Layout from '../templates/layout'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getUsersQuery } from '@/shared/queries/get-users-queries'
import UsersTable from '../organisms/users-table'
import { Container } from './styles'
import Pagination from '@/components/molecules/pagination'

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
          <Pagination
            page={page}
            onChange={handlePageChange}
            totalPages={data.pagination.totalPages}
          />
        )}
      </Container>
    </Layout>
  )
}

export default MainPage
