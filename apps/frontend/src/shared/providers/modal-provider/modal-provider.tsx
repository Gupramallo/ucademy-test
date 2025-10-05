import React, { PropsWithChildren, useMemo } from 'react'
import useUserTable from '@/hooks/use-user-table'
import { ModalContext } from './context'

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const props = useUserTable()

  const value = useMemo(() => props, [props])

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalProvider
