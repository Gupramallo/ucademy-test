import {
  styled,
  TableCell,
  TableRow,
  TableContainer as MuiTableContainer,
  Paper,
} from '@mui/material'

export const Container = styled(Paper)`
  display: flex;
  min-height: 75vh;
`

export const TableContainer = styled(MuiTableContainer)`
  max-height: 75vh;
  overflow-y: scroll;
`

export const EmptyCell = styled(TableCell)`
  width: ${({ theme }) => theme.spacing(11.25)};
  padding: 0;
`

export const NameCell = styled(TableCell)`
  width: ${({ theme }) => theme.spacing(41.25)};
`

export const UserCell = styled(TableCell)`
  width: ${({ theme }) => theme.spacing(27.25)};
`

export const EmailCell = styled(TableCell)`
  width: ${({ theme }) => theme.spacing(37.5)};
`

export const MobileCell = styled(TableCell)`
  width: ${({ theme }) => theme.spacing(24.5)};
`

export const TableHeaderRow = styled(TableRow)`
  background-color: ${({ theme }) => theme.palette.grey[50]};
`

export const LoadingContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
