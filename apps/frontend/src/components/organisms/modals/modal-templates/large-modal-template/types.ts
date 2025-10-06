import type { PropsWithChildren, ReactNode } from 'react'

export type LargeModalTemplateProps = PropsWithChildren & {
  title?: string
  topButtons?: ReactNode
  onClose: () => void
  bottomContent?: React.ReactNode
}
