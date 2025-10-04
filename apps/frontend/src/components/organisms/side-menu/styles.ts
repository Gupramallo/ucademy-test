import { styled } from '@mui/material/styles'

export const MainContainer = styled('div')`
  position: fixed;
  width: ${({ theme }) => theme.spacing(27)};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ theme }) => theme.spacing(3)};
`

export const BannerContainer = styled('div')`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.spacing(25)};
  gap: ${({ theme }) => theme.spacing(0.5)};
  justify-content: space-between;
`

export const IconsContainer = styled('div')`
  margin-top: ${({ theme }) => theme.spacing(5)};
`
export const MenuButton = styled('div')`
  min-width: ${({ theme }) => theme.spacing(24.5)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`
