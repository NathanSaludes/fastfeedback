import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import { GithubIcon, LogoIcon } from '@/styles/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useAuth } from '@/lib/auth'

export default function Home() {
	const auth = useAuth()

	const showAuthentication = () => {
		if (auth.user) {
			return (
				<Flex direction="column">
					<Text>{auth.user.name}</Text>
					<Button onClick={() => auth.signOut()}>Sign Out</Button>
				</Flex>
			)
		}

		return <Button onClick={() => auth.signInWithGithub()}>Sign In</Button>
	}

	return (
		<>
			<Head>
				<title>Fast Feedback</title>
			</Head>
			<Flex
				as="main"
				direction="column"
				alignItems="center"
				justifyContent="center"
				minWidth="360px"
				height="100vh"
			>
				<LogoIcon boxSize="5rem" />
				{showAuthentication()}
			</Flex>
		</>
	)
}
