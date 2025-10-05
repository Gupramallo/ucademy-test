import { styled } from '@mui/material'

export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4.75)};
  align-items: center;
`

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(45.5)};
`
