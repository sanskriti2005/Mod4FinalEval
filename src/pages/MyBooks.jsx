import { fetchMyBooks } from "@/redux/actions/booksActions";
import { Grid, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyBooks = () => {
  const { user } = useSelector((state) => state.auth);
  const { myBooks } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMyBooks(user.uid));
  }, []);
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
