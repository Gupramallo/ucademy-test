import { ButtonProps as MuiButtonProps } from '@mui/material'

export type ButtonProps = Pick<MuiButtonProps, 'color'> & {
  label: string
  onClick: () => void
  disabled?: boolean
}
