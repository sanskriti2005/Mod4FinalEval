import { addBooksToUsersList, fetchBooks } from '@/redux/actions/booksActions';
import { Grid, Heading, Image, Text, VStack, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { books, loading, error } = useSelector(state => state.books);
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [])
  
  const handleRead = (bookObj) => {
    if(!user){
      alert('Please login or register to read')
    } else{
      dispatch(addBooksToUsersList(bookObj, user.uid))
    }
  }
  return (
    <div>
      <Grid templateColumns={'repeat(auto-fill, minmax(400px, 1fr))'} gap={3}>
      {
        loading ? <Text>Loading...</Text> : books &&
        books.length > 0 ? 
        books.map((book) => {
          return(
            <VStack padding={4} border={"1px solid white"} borderRadius={"8px"} key={book.id}>
              <Image src={book.coverImage}/>
              <Heading>{book.title}</Heading>
              <Text>{book.author}</Text>
              <Button onClick={() => handleRead(book)}>Want to read</Button>
            </VStack>
          )
        })
        : <Text>No books ;/</Text>
      }
      </Grid>
    </div>
  )
}

export default Home