import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  List,
  ListItem,
  propNames,
  Flex,
  Card,
  CardBody,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, deleteTodo }) {
  //Add input parameters.
  // Your code here.
  if (todos.length === 0){
    return (
      <div>
      </div>
    );
  }
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {todos.map((todo, index) => (
            <Box key={index} minWidth="500">
              <Heading size="xs" textTransform="uppercase">
                No. {todo.id}
              </Heading>
              <Flex justify="space-between" align="center">
                <Text pt="2" fontSize="sm">
                  {todo.body}
                </Text>
                <IconButton
                  aria-label="Delete"
                  icon={<FaTrash />}
                  onClick={() => deleteTodo(todo.id)}
                />
              </Flex>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>

    // <Flex direction="column" justify="center" align="center" gap="4">
    //   <button onClick={() => console.log(todos)}>Click me</button>
    //   <Flex gap="8">
    //   <IconButton
    //     aria-label='Delete'
    //     icon={<FaTrash />}
    //     onClick={() => deleteTodo()}
    //   />
    //   </Flex>
    // </Flex>
  );
}

export default TodoList;
