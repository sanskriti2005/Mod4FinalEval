import { loginUser, registerUser } from '@/redux/actions/authActions';
import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Register = () => {
  const initFormData = { email: '', password: '' }
  const [formData, setFormData] = useState(initFormData);
  const dispatch = useDispatch()


  const handleInput = (e) => {
    const { name, value} = e.target
    setFormData(
      {...formData, [name]: value}
    )
    setFormData(initFormData)
  }

  const handleRegistration = () => {
    dispatch(registerUser(formData))
  }

  return (
    <VStack width={600} margin={'auto'}>
      <Heading>Register</Heading>
      <Input type='email' value={formData.email} name="email" onChange={(e) => handleInput(e)} placeholder='Email'/>
      <Input type='password' value={formData.password} name="password" onChange={(e) => handleInput(e)} placeholder='Password'/>
      <Button onClick={handleRegistration}>Register</Button>
    </VStack>
  )
}

export default Register