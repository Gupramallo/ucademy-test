import React from 'react'
import {
  BannerContainer,
  IconsContainer,
  MainContainer,
  MenuButton,
} from './styles'
import { HelpOutline, NotificationsOutlined } from '@mui/icons-material'
import Logo from '@/components/atoms/logo'
import Typography from '@mui/material/Typography'
import SchoolIcon from '@mui/icons-material/School'

const SideMenu: React.FC = () => (
  <MainContainer>
    <BannerContainer>
      <Logo />
      <NotificationsOutlined />
      <HelpOutline />
    </BannerContainer>

    <IconsContainer>
      <MenuButton>
        <SchoolIcon />
        <Typography variant="body1">Alumnos</Typography>
      </MenuButton>
    </IconsContainer>
  </MainContainer>
)

export default SideMenu
