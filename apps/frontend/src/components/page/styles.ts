import { styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(1.5)};
`
