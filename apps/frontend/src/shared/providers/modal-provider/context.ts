import { createContext, useContext } from 'react'
import { ModalContextType } from './types'
import { MODAL_CONTEXT_DEFAULT_VALUES } from './constants'

export const ModalContext = createContext<ModalContextType>(
  MODAL_CONTEXT_DEFAULT_VALUES
)

export const useModalProvider = (): ModalContextType => useContext(ModalContext)
