import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import logo from '../../images/logo.png'

interface NavbarProps {
  minimal?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ minimal }) => {
  return (
    <Box
      position="fixed"
      top="0"
      height="54px"
      w="100%"
      background="#fff"
      color="#000"
      p="15px 0"
      shadow="sm"
      borderBottom="1px solid #e6e6e6"
    >
      <Flex alignItems="center" justifyContent="center">
        <Flex
          maxWidth="975px"
          width="100%"
          padding="0px 30px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />
          {!minimal && (
            <>
              <Search />
              <Links />
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

function Search() {
  return <p>Search bar</p>
}
function Links() {
  return <p>Links</p>
}

function Logo() {
  return (
    <Box minW="40" display="flex">
      <Box
        flex="0 0 auto"
        justifyContent="flex-start"
        alignItems="center"
        alignContent="stretch"
      >
        <Image
          objectFit="contain"
          maxH="100%"
          maxW="100%"
          src={logo}
          alt="Instagram"
        />
      </Box>
    </Box>
  )
}
