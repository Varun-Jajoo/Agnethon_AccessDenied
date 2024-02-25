import React from "react";
import { ChakraProvider, Button, Input } from "@chakra-ui/react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";

export default function LinkGenerator() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = React.useState({
    topic: "",
    startTime: "",
    duration: "",
    timezone: "",
    agenda: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerateLink = () => {
    // Logic to generate link using formData
    console.log("Generating link with data:", formData);
    // Reset form data if needed
    setFormData({
      startTime: "",
      duration: "",
      timezone: "",
      agenda: "",
    });
    // Close the modal
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Schedule New Class</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Meeting Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              mb={4}
            />
            <Input
              placeholder="Agenda"
              name="agenda"
              value={formData.agenda}
              onChange={handleChange}
              mb={4}
            />
            <Input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              mb={4}
            />
            
            <Select
              placeholder="Select Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              mb={4}
            >
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1 hour 30 minutes</option>
              <option value="120">2 hours</option>
            </Select>
            <Input
              placeholder="Timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              mb={4}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleGenerateLink}>
              Generate Link
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
