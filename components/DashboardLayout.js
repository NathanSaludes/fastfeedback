import { useAuth } from '@/lib/auth'
import { LogoIcon } from '@/styles/icons'
import { Flex, Stack, Link, Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Box, Text, Button } from '@chakra-ui/react'

export default function DashboardLayout({ children }) {
	const auth = useAuth()

	return (
		<Flex
			flexDirection="column"
			minHeight="100vh"
			backgroundColor="gray.100"
		>
			<Flex
				backgroundColor="white"
				alignItems="center"
				justifyContent="space-between"
				padding="1rem 2rem"
			>
				<Stack isInline spacing={5} align="center">
					<LogoIcon boxSize="2rem" />
					<Link>Feedback</Link>
					<Link>Sites</Link>
				</Stack>
				<Flex alignItems="center">
					<Link href="/" mr={3}>{auth.user?.name}</Link>
					<Link href="/">
						<Avatar size="sm" src={auth.user?.photoUrl} />
					</Link>
				</Flex>
			</Flex>
			<Flex>
				<Flex
					margin="0 auto"
					direction="column"
					width="100%"
					maxWidth="1259px"
					px={20}
				>
					<Breadcrumb marginTop="1rem">
						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
					<Heading color="black" mt={2} mb={4}>Sites</Heading>
					{children}
				</Flex>
			</Flex>
		</Flex >
	)
}