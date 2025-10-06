import React from 'react'
import { ProfileInfoLabelProps } from './types'
import { Typography } from '@mui/material'
import { Container, EmptyIcon, InfoContainer } from './styles'

const ProfileInfoLabel: React.FC<ProfileInfoLabelProps> = ({
  title,
  text,
  icon,
}) => (
  <Container>
    {icon ?? <EmptyIcon />}
    <InfoContainer>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2">{text ?? '-'}</Typography>
    </InfoContainer>
  </Container>
)

export default ProfileInfoLabel
