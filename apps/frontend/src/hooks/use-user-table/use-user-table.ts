import { User } from '@/shared/types'
import { useReducer } from 'react'
import { INITIAL_MODAL_STATE, MODAL_ACTIONS, MODALS } from './constants'
import { modalReducer } from './reducer'

export const useUserTable = () => {
  const [modalState, dispatch] = useReducer(modalReducer, INITIAL_MODAL_STATE)

  const openProfileModal = (user?: User) =>
    dispatch({ type: MODAL_ACTIONS.openProfile, user })

  const openEditModal = (user?: User) =>
    dispatch({ type: MODAL_ACTIONS.openEdit, user })

  const openCreateModal = () => dispatch({ type: MODAL_ACTIONS.openCreate })

  const openWarningModal = (user?: User) =>
    dispatch({ type: MODAL_ACTIONS.openWarning, user })

  const modifySelectedUser = (user?: User) =>
    dispatch({ type: MODAL_ACTIONS.modifyUser, user })

  const closeModal = () => dispatch({ type: MODAL_ACTIONS.closeModal })

  const Modal = MODALS[modalState.type]

  return {
    openProfileModal,
    openEditModal,
    openCreateModal,
    openWarningModal,
    closeModal,
    selectedUser: modalState.selectedUser,
    modalType: modalState.type,
    isOpen: modalState.isOpen,
    Modal,
    modifySelectedUser,
  }
}
