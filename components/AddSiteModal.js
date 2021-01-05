import { useRef, useState } from 'react'
import { createSite } from "@/lib/db";

import { useForm } from 'react-hook-form'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	useDisclosure,
	Button,
	FormErrorMessage,
	useToast
} from "@chakra-ui/react"

export default function AddSiteModal() {
	const initialRef = useRef()
	const [loading, setLoading] = useState(false)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { register, handleSubmit, errors } = useForm()
	const toast = useToast()

	const onCreateSite = async (values) => {
		setLoading(true)
		await createSite(values)
		toast({
			title: "Success",
			description: "You have successfully created a new site.",
			status: "success",
			isClosable: true,
			duration: 9000
		})
		setLoading(false)
		onClose()
	}

	return (
		<>
			<Button
				onClick={onOpen}
				fontWeight="medium"
				width="13rem"
				maxW="13rem"
			>
				Add Your First Site
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent
					as="form"
					onSubmit={handleSubmit(onCreateSite)}
				>
					<ModalHeader fontWeight="bold">Add Site</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl isRequired>
							<FormLabel>Name</FormLabel>
							<Input
								placeholder="My site"
								name="site"
								ref={register({
									required: true
								})}
							/>
							<FormErrorMessage>{errors}</FormErrorMessage>
						</FormControl>

						<FormControl mt={4} isRequired>
							<FormLabel>Link</FormLabel>
							<Input
								placeholder="https://website.com"
								name="url"
								ref={register({
									required: true
								})}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button onClick={onClose} mr={3}>Cancel</Button>
						<Button
							colorScheme="teal"
							type="submit"
							isLoading={loading}
						>
							Create
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}