import { fetchMyBooks, updateBookStatus } from "@/redux/actions/booksActions";
import { Grid, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NativeSelect } from "@chakra-ui/react"

const MyBooks = () => {
  const { user } = useSelector((state) => state.auth);
  const { myBooks } = useSelector((state) => state.books);
  const [status, setStatus] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMyBooks(user.uid));
  }, []);

  const handleChangeStatus = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      {user ? (
        <Grid templateColumns={"repeat(auto-fill, minmax(400px, 1fr))"} gap={3}>
          {myBooks && myBooks.length > 0 ? (
            myBooks.map((book) => {
              return (
                <VStack
                  padding={4}
                  border={"1px solid white"}
                  borderRadius={"8px"}
                  key={book.id}
                >
                  <Heading>{book.title}</Heading>
                  <Text>{book.author}</Text>
                  <Text>{book.status}</Text>
                  <select value={status} onChange={(e) => handleChangeStatus(e)}>
                    <option value={'Read'}>Read</option>
                    <option value={'Want to Read'}>Want to read</option>
                  </select>
                  <Button onClick={() => dispatch(updateBookStatus(book.id, user.uid))}>Change Status</Button>
                </VStack>
              );
            })
          ) : (
            <Text>No books in your list ;/</Text>
          )}
        </Grid>
      ) : (
        navigate("/register")
      )}
    </div>
  );
};

export default MyBooks;
