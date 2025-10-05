import { Box } from '@mui/material'
import React from 'react'
import { ModalProps } from './types'

const ProfileModal: React.FC<ModalProps> = ({ user }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      {user?.name} {user?.lastName}
    </Box>
  )
}

export default ProfileModal
