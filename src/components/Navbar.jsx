import { logoutUser } from "@/redux/actions/authActions";
import { Flex, Link, Box, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  return (
    <Flex justify={"space-between"} padding={3}>
      <Box>My Library</Box>

      <Flex gap={4}>
        {user ? (
          <>
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/mybooks">
              My Books
            </Link>
            <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
          </>
        ) : (
          <>
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/login">
              Login
            </Link>
            <Link as={RouterLink} to="/register">
              Register
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
