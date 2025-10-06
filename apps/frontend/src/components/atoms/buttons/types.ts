import { ButtonProps as MuiButtonProps, TypographyProps } from '@mui/material'

export type ButtonProps = Pick<MuiButtonProps, 'color'> &
  Pick<TypographyProps, 'variant'> & {
    label: string
    onClick: () => void
    disabled?: boolean
  }
