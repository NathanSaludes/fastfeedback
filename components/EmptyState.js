import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import DashboardLayout from "./DashboardLayout";

export default function EmptyState() {
	return (
		<DashboardLayout>
			<Flex
				width="100%"
				backgroundColor="white"
				alignItems="center"
				direction="column"
			>
				<Heading size="md" margin="0.5rem">You haven't added any sites.</Heading>
				<Text mb={10}>Welcome! Let's get started 🤘 </Text>
				<Button fontWeight="medium" width="13rem" maxW="13rem">Add Your First Site</Button>
			</Flex>
		</DashboardLayout>
	)
}
