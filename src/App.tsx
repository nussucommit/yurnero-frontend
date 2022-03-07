import { ChakraProvider } from '@chakra-ui/react'
import Pages from 'pages'

function App() {
  return (
    <ChakraProvider>
      <Pages />
    </ChakraProvider>
  )
}

export default App
