import React, { useState } from 'react'
import Layout from '../templates/layout'
import { useQuery } from '@tanstack/react-query'
import { getUsersQuery } from '@/shared/queries/get-users-queries'
import UsersTable from '../organisms/users-table'
import { Container } from './styles'
import Pagination from '@/components/molecules/pagination'
import PageHeader from '@/components/molecules/page-header'
import { Modal } from '@mui/material'
import { useModalProvider } from '@/shared/providers/modal-provider/context'

const MainPage: React.FC = () => {
  const [page, setPage] = useState(1)
  const {
    isOpen,
    Modal: ModalComponent,
    openProfileModal,
    closeModal,
    selectedUser,
    openCreateModal,
  } = useModalProvider()
  const { data, isLoading } = useQuery(getUsersQuery({ page }))

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    setPage(page)

  return (
    <Layout>
      <Container>
        <PageHeader onClick={openCreateModal} />
        <UsersTable
          openProfileModal={openProfileModal}
          users={data?.users ?? []}
          isLoading={isLoading}
        />
        {data?.pagination && (
          <Pagination
            page={page}
            onChange={handlePageChange}
            totalPages={data.pagination.totalPages}
          />
        )}
      </Container>
      <Modal open={isOpen} onClose={closeModal}>
        <div>
          <ModalComponent user={selectedUser} />
        </div>
      </Modal>
    </Layout>
  )
}

export default MainPage
