import React from 'react'
import Layout from '../templates/layuot'
import { Box, CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getUsersQuery } from '@/shared/queries/get-users-queries'

const MainPage: React.FC = () => {
  const { data, isLoading } = useQuery(getUsersQuery())

  if (isLoading) {
    return (
      <Layout>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <pre>{JSON.stringify(data?.users)}</pre>
    </Layout>
  )
}

export default MainPage
