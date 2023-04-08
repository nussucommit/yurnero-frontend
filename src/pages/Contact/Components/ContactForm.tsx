import {
  DefaultIcon,
  Container,
  Select,
  Input,
  HStack,
  VStack,
  Box,
  Flex,
  Grid,
  StylesProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import styles from './Components.module.css'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  return (
    <div className={styles.Mailing}>
      <h2>Subscribe to our mailing list</h2>
      <Stack spacing={10}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Current Year in NUS</FormLabel>
          <Select>
            <option value="option1">Year 1</option>
            <option value="option2">Year 2</option>
            <option value="option3">Year 3</option>
            <option value="option3">Year 4</option>
            <option value="option3">Others</option>
          </Select>
          <Button width={'20%'} colorScheme={'yellow'}>
            Subscribe
          </Button>
        </FormControl>
      </Stack>
    </div>
  )
}

export default ContactForm
