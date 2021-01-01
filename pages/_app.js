import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../lib/auth'
import '../styles/globals.css'
import theme from '../styles/theme'


export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme} resetCSS={true}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ChakraProvider>
	)
}