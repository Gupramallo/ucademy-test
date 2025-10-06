import { Typography } from '@mui/material'
import React from 'react'
import { SmallModalTemplate } from '../modal-templates'
import type { User } from '@/shared/types'
import {
  ContentContainer,
  IconContainer,
  TextContainer,
  WarningIcon,
} from './styles'
import useWarningUserModal from '@/hooks/use-warning-user-modal'

const WarningModal: React.FC = () => {
  const { selectedUser, openProfileModal, onClick } = useWarningUserModal()

  return (
    <SmallModalTemplate
      onClose={() => openProfileModal(selectedUser as User)}
      onClick={onClick}
    >
      <ContentContainer>
        <IconContainer>
          <WarningIcon />
        </IconContainer>

        <TextContainer>
          <Typography variant="body1">
            ¿Seguro que quieres desactivar esta cuenta?
          </Typography>
          <Typography variant="body1">
            El usuario dejará de tener acceso a la plataforma.
          </Typography>
        </TextContainer>
      </ContentContainer>
    </SmallModalTemplate>
  )
}

export default WarningModal
