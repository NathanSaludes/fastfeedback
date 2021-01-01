import { Box, Button, Heading, Text } from "@chakra-ui/react";
import DashboardLayout from "./DashboardLayout";

export default function FreePlanEmptyState() {
	return (
		<DashboardLayout>
			<Box width="100%" backgroundColor="white">
				<Heading size="md">Get feedback on your site instantly</Heading>
				<Text>Start today, then  grow with us 🌱</Text>
				<Button>Upgrade to Starter</Button>
			</Box>
		</DashboardLayout>
	)
}
