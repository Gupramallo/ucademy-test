import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import {
  TableContainer,
  EmailCell,
  EmptyCell,
  MobileCell,
  NameCell,
  TableHeaderRow,
  UserCell,
  LoadingContainer,
  Container,
} from './styles'
import type { UserTableProps } from './types'

const UsersTable: React.FC<UserTableProps> = ({
  users,
  isLoading,
  openProfileModal,
}) => (
  <Container>
    {isLoading ? (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    ) : (
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableHeaderRow>
              <EmptyCell />
              <NameCell>Nombres y apellidos</NameCell>
              <UserCell>Usuario</UserCell>
              <EmailCell>Email</EmailCell>
              <MobileCell>Movil</MobileCell>
            </TableHeaderRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                onClick={() => openProfileModal(user)}
                hover
                key={user._id}
              >
                <TableCell />
                <TableCell>{`${user.name} ${user.lastName}`}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </Container>
)

export default UsersTable
