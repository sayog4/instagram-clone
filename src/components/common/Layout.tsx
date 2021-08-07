import React from 'react'
import { Box } from '@chakra-ui/react'
import { Navbar } from './Navbar'

export const Layout: React.FC = ({ children }) => {
  return (
    <section className="section">
      <Navbar />
      <main className="main">
        <section className="container">
          <Box width="100%">{children}</Box>
        </section>
      </main>
    </section>
  )
}
