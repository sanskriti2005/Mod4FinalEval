import { registerUser } from '@/redux/actions/authActions';
import { Button, Input, VStack } from '@chakra-ui/react'
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
  }

  const handleRegistration = () => {
    dispatch(registerUser(formData))
  }

  return (
    <VStack>
      <Input type='email' value={formData.email} name="email" onChange={(e) => handleInput(e)}/>
      <Input type='password' value={formData.password} name="password" onChange={(e) => handleInput(e)}/>
      <Button onClick={handleRegistration}>Register</Button>
    </VStack>
  )
}

export default Register