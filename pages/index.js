import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import { LogoIcon } from '@/styles/icons'
import { Flex } from '@chakra-ui/react'

export default function Home() {
	return (
		<>
			<Head>
				<title>Fast Feedback</title>
			</Head>
			<Flex
				as="main"
				direction="column"
				align="center"
				justify="center"
				minWidth="360px"
				height="100vh"
			>
				<LogoIcon boxSize="5rem" />
			</Flex>
		</>
	)
}
