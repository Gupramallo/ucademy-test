import { styled } from '@mui/material'

export const Container = styled('div')`
  width: ${({ theme }) => theme.spacing(17.25)};
  height: ${({ theme }) => theme.spacing(17.25)};
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
