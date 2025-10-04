import { styled, TableCell, TableRow } from '@mui/material'

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
