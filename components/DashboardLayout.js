import { LogoIcon } from '@/styles/icons'
import { Flex, Stack, Link, Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Box, Text, Button } from '@chakra-ui/react'

export default function DashboardLayout({ children }) {
	return (
		<Flex flexDirection="column" minHeight="100vh">
			<Flex
				backgroundColor="white"
				alignItems="center"
				justifyContent="space-between"
				pt={4}
				pb={3}
				px={8}
			>
				<Stack isInline spacing={5} align="center">
					<LogoIcon boxSize="2rem" />
					<Link>Feedback</Link>
					<Link>Sites</Link>
				</Stack>
				<Flex alignItems="center">
					<Link mr={4}>Account</Link>
					<Avatar size="sm" />
				</Flex>
			</Flex>
			<Flex backgroundColor="gray.100">
				<Flex
					margin="0 auto"
					direction="column"
					width="100%"
					maxWidth="1259px"
					px={20}
				>
					<Breadcrumb>
						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink color="black">Sites</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
					<Heading color="black" mt={2} mb={4}>Sites</Heading>
					{children}
				</Flex>
			</Flex>
		</Flex>
	)
}