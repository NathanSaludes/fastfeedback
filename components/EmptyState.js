import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import DashboardLayout from "./DashboardLayout";
import AddSiteModal from "./AddSiteModal";

export default function EmptyState() {
	return (
		<DashboardLayout>
			<Flex
				width="100%"
				backgroundColor="white"
				alignItems="center"
				direction="column"
				padding={8}
				borderRadius="1rem"
			>
				<Heading size="lg" margin="0.5rem">You haven't added any sites.</Heading>
				<Text mb={10}>Welcome! Let's get started 🤘 </Text>
				<AddSiteModal />
			</Flex>
		</DashboardLayout>
	)
}
