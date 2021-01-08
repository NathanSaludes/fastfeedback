import Head from 'next/head';
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import FreePlanEmptyState from '@/components/FreePlanEmptyState';

import { Button } from "@chakra-ui/react";

export default function Dashboard() {
	const auth = useAuth();

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			{auth.user ? <EmptyState /> : <FreePlanEmptyState />}
		</>
	)
}