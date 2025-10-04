import { styled } from '@mui/material/styles'

export const Container = styled('div')`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
  gap: ${({ theme }) => theme.spacing(4)};
`

export const Content = styled('div')`
  margin-left: ${({ theme }) => theme.spacing(37)};
  width: 100%;
  padding-right: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`
