import { styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2.5)};
  align-items: center;
  height: ${({ theme }) => theme.spacing(7.5)};
  padding: ${({ theme }) => theme.spacing(0, 2.5)};
`

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
`

export const EmptyIcon = styled('div')`
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
`
