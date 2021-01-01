import { useRef } from 'react'
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
	Button
} from "@chakra-ui/react"

export default function AddSiteModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = useRef()

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
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontWeight="bold">Add Site</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input ref={initialRef} placeholder="My site" />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Link</FormLabel>
							<Input placeholder="https://website.com" />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button onClick={onClose} mr={3}>Cancel</Button>
						<Button colorScheme="teal">Create</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}