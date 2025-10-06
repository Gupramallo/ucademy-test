import { styled } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
`

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const IconContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

export const WarningIcon = styled(ErrorOutlineIcon)`
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
`
