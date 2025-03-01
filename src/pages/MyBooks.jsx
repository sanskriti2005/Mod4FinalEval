import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const MyBooks = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      {
        user 
        ? <h2>My books</h2>
        : navigate("/register")
      }
    </div>
  )
}

export default MyBooks