import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'
import { ModalProps } from '../types'
import ImagePlaceholder from '@/components/atoms/image-placeholder'
import { LargeModalTemplate } from '../modal-templates'
import { useModalProvider } from '@/shared/providers/modal-provider/context'
import MainButton from '@/components/atoms/buttons/main-button'
import ProfileInfoLabel from '@/components/molecules/profile-info-label'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email'
import { ContentContainer, InfoContainer } from './styles'

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
      <ContentContainer>
        <ImagePlaceholder />
        <InfoContainer>
          <ProfileInfoLabel
            icon={<AccountCircleIcon />}
            title="Nombres y apellidos"
            text={`${user?.name} ${user?.lastName}`}
          />
          <ProfileInfoLabel title="Nombres de usuario" text={user?.name} />
          <ProfileInfoLabel
            icon={<EmailIcon />}
            title="Email"
            text={user?.email}
          />
          <ProfileInfoLabel
            icon={<PhoneAndroidIcon />}
            title="Móvil"
            text={user?.phone}
          />
        </InfoContainer>
      </ContentContainer>
    </LargeModalTemplate>
  )
}

export default ProfileModal
