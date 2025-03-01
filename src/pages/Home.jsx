import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const { books } = useSelector(state => state.books);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home