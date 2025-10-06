import { Button as MuiButton, styled } from '@mui/material'

export const Button = styled(MuiButton)`
  color: ${({ theme }) => theme.palette.common.white};
  text-transform: capitalize;
`
