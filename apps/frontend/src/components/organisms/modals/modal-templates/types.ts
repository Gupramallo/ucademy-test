import React, { PropsWithChildren } from 'react'

export type LargeModalTemplateProps = PropsWithChildren & {
  title?: string
  topButtons?: React.ReactNode
  onClose: () => void
  bottomContent?: React.ReactNode
}
