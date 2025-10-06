import type { PropsWithChildren } from 'react'

export type SmallModalTemplateProps = PropsWithChildren & {
  onClose: () => void
  onClick?: () => void
  mainButtonLabel?: string
}
