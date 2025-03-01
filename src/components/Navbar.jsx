import { Flex, Link, Box } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex justify={'space-between'} padding={3}>
      <Box>My Library</Box>
      <Flex gap={4}>
        <Link as={RouterLink} to='/'>
          Home
        </Link>
        <Link as={RouterLink} to='/login'>
          Login
        </Link>
        <Link as={RouterLink} to='/register'>
          Register
        </Link>
        <Link as={RouterLink} to='/mybooks'>
          My Books
        </Link>
      </Flex>
    </Flex>
    
  )
}

export default Navbar