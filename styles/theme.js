import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		body: 'Inter, sans-serif',
		heading: 'Inter, sans-serif'
	},
	fontWeights: {
		normal: 400,
		medium: 600,
		bold: 700
	},
	styles: {
		global: {
			'html, body': {
				minWidth: '360px',
				scrollBehavior: 'smooth'
			},
			'#__next': {
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh'
			}
		}
	}
})

export default theme