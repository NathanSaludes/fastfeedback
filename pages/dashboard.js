import Head from 'next/head';
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

import { Button } from "@chakra-ui/react";

export default function Dashboard() {
	const auth = useAuth();

	if (!auth.user) {
		return 'Loading...'
	}

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<EmptyState />
		</>
	)
}