import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import DashboardLayout from "./DashboardLayout";

export default function FreePlanEmptyState() {
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
				<Heading size="lg" margin="0.5rem">Get feedback on your site instantly</Heading>
				<Text mb={10}>Start today, then  grow with us 🌱</Text>
				<Button>Upgrade to Starter</Button>
			</Flex>
		</DashboardLayout>
	)
}
