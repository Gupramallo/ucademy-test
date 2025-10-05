import { styled } from '@mui/material'

export const Container = styled('div')<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(8.125)};
  height: ${({ theme }) => theme.spacing(2.75)};
  border-radius: ${({ theme }) => theme.spacing(0.625)};
  background-color: ${({ isActive }) => (isActive ? '#90E8BE' : '#CAD6DC')};
`
