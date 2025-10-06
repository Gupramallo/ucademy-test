import { styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2.5)};
  padding: ${({ theme }) => theme.spacing(0, 4)};
`
