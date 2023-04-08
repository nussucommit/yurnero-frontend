import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Select, Stack } from '@chakra-ui/react'
import styles from './Components.module.css'

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values: any) {
    values['year'] = +values['year']
    fetch('http://127.0.0.1:8000/subscribe/', {
      // Enter your IP address here

      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(values), // body data type must match "Content-Type" header
    })

    return new Promise<void>(resolve => {
      setTimeout(() => {
        alert('subscribed!')
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.Mailing}>
        <h2>Subscribe to our mailing list</h2>
      </div>
      <FormControl>
        <Stack spacing={5}>
          <div>
            <FormLabel htmlFor="name">Email Address</FormLabel>
            <Input
              id="email"
              placeholder="Email"
              {...register('email', {
                required: 'This is required',
              })}
            />
          </div>
          <div>
            <FormLabel>Current Year in NUS</FormLabel>
            <Select
              id="year"
              {...register('year', {
                required: 'This is required',
              })}
            >
              <option value="1">Year 1</option>
              <option value="2">Year 2</option>
              <option value="3">Year 3</option>
              <option value="4">Year 4</option>
              <option value="5">Others</option>
            </Select>
          </div>
          <div>
            <FormLabel>Full Name</FormLabel>
            <Input
              id="name"
              placeholder="Full Name"
              {...register('name', {
                required: 'This is required',
              })}
            />
          </div>
          {/* <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage> */}
        </Stack>
      </FormControl>
      <Button mt={4} colorScheme="yellow" isLoading={isSubmitting} type="submit">
        Subscribe
      </Button>
    </form>
  )
}
