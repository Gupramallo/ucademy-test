import { Paper, styled } from '@mui/material'

export const Container = styled(Paper)`
  width: ${({ theme }) => theme.spacing(62.5)};
  height: ${({ theme }) => theme.spacing(27.5)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing(2.25)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(2.5)};
  justify-content: center;
  flex-direction: column;
`

export const ContentContainer = styled('div')`
  display: flex;
  justify-content: center;
`

export const BottomContainer = styled('div')`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(5.5)};
`
