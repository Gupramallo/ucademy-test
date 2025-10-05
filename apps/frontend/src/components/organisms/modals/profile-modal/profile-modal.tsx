import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'
import { ModalProps } from '../types'
import ImagePlaceholder from '@/components/atoms/image-placeholder'
import { LargeModalTemplate } from '../modal-templates'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import MainButton from '@/components/atoms/buttons/main-button'

const ProfileModal: React.FC<ModalProps> = ({ user }) => {
  const { closeModal } = useModalProvider()

  return (
    <LargeModalTemplate
      onClose={closeModal}
      topButtons={<MainButton label="Editar estudiante" onClick={() => {}} />}
      bottomContent={
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked={user?.isActive} />}
            label="Cuenta activa"
          />
        </FormGroup>
      }
    >
      <>
        <ImagePlaceholder />
        {user?.name} {user?.lastName}
      </>
    </LargeModalTemplate>
  )
}

export default ProfileModal
