import React from 'react'
import { ModalProps } from '../types'
import { LargeModalTemplate } from '../modal-templates'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import MainButton from '@/components/atoms/buttons/main-button'

const CreateProfileModal: React.FC<ModalProps> = () => {
  const { closeModal } = useModalProvider()

  return (
    <LargeModalTemplate
      onClose={closeModal}
      topButtons={<MainButton label="Guardar" onClick={() => {}} />}
    >
      <>Test Create</>
    </LargeModalTemplate>
  )
}

export default CreateProfileModal
