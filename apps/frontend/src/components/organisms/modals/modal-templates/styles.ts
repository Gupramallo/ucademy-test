import { Paper, styled } from '@mui/material'

export const Container = styled(Paper)`
  width: ${({ theme }) => theme.spacing(62.5)};
  height: ${({ theme }) => theme.spacing(75)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing(2.25)};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const ButtonsContainer = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`
export const HeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`

export const ContentContainer = styled('div')`
  display: flex;
  justify-content: center;
`

export const BottomContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`
