import { styled } from '@mui/material'

export const Container = styled('div')<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(8.125)};
  height: ${({ theme }) => theme.spacing(2.75)};
  border-radius: ${({ theme }) => theme.spacing(0.625)};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.light : theme.palette.grey[100]};
`
