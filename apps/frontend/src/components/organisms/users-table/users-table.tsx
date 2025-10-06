import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
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
import StatusChip from '@/components/atoms/status-chip'

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
              <NameCell>
                <Typography variant="button2">Nombres y apellidos</Typography>
              </NameCell>
              <UserCell>
                <Typography variant="button2">Usuario</Typography>
              </UserCell>
              <EmailCell>
                <Typography variant="button2">Email</Typography>
              </EmailCell>
              <MobileCell>
                <Typography variant="button2">Movil</Typography>
              </MobileCell>
            </TableHeaderRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                onClick={() => openProfileModal(user)}
                hover
                key={user._id}
              >
                <TableCell>
                  <StatusChip isActive={user.isActive} />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{`${user.name} ${user.lastName}`}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{user.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{user.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{user.phone}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </Container>
)

export default UsersTable
