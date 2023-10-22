import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  Input
} from '@chakra-ui/react'

function AddTodo({addTodo, todos}) {
  const [todoText, setTodoText] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const handleInputChange = (e) => {
    setTodoText(e.target.value); // Update the input value in state
  };
  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        body: todoText,
      };
      addTodo(newTodo);
      setTodoText('');
      onClose();
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Add</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Add an item to your todo list</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Input
            placeholder='Type in something you need to do' 
            value={todoText}
            onChange={handleInputChange}
            />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => {
              setTodoText("");
              onClose();
              }}>
              Cancel
            </Button>
            <Button colorScheme='blue' ml={3} onClick={handleAddTodo}>
              Add
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AddTodo;
