import { User } from '@/shared/types'
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import {
  EmailCell,
  EmptyCell,
  MobileCell,
  NameCell,
  TableHeaderRow,
  UserCell,
} from './styles'

const UsersTable: React.FC<{ users: User[]; isLoading?: boolean }> = ({
  users,
  isLoading,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: '730px',
        overflowY: 'scroll',
      }}
    >
      <Table aria-label="simple table" stickyHeader>
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
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="200px"
            >
              <CircularProgress />
            </Box>
          ) : (
            users.map((user) => (
              <TableRow onClick={() => {}} key={user._id}>
                <TableCell />
                <TableCell>{`${user.name} ${user.lastName}`}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UsersTable
