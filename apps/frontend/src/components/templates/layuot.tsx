import React, { PropsWithChildren } from 'react'
import SideMenu from '../organisms/side-menu'
import { Container } from './styles'

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <SideMenu />
    {children}
  </Container>
)

export default Layout
