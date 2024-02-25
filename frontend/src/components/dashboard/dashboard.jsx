import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  ChakraProvider,
  Input,
  IconButton,
  Button,
  extendTheme,
} from '@chakra-ui/react'
import {
  FiHome,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiCalendar,
} from 'react-icons/fi'
import { BsCameraVideoFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import DashboardContent from './dashboardContent';
import { FaCalendarAlt } from "react-icons/fa";

const LinkItems= [
  { name: 'Dashboard', icon: BiSolidDashboard },
  { name: 'My Courses', icon: FiHome },
  { name: ' Webinars', icon: BsCameraVideoFill },
  { name: 'Calendar', icon: FiCalendar },
  { name: 'Messages', icon: FiSettings },
]

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#245D51', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      color={'white'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#FF6652;',
          color: 'black',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
        
      </Flex>
    </Box>
  )
}

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-indexed, so add 1
const day = today.getDate();

// Format the date as needed, e.g., YYYY-MM-DD
const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        
        <Button leftIcon={<FaCalendarAlt color={"#245D51"} />} colorScheme='teal' variant='outline' width={240} px={2}>
              {date}
         </Button>
        <Input
          size="md"
          variant="outline"
          placeholder="Search..."
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.800', 'white')}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          _placeholder={{ color: useColorModeValue('gray.500', 'gray.300') }}
          px={3}
          py={1}
          borderRadius="md"
          _focus={{
            borderColor: 'blue.500',
            boxShadow: 'outline',
          }}
        />
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
               
                  
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Dashboard</MenuItem>
              <MenuItem>My courses</MenuItem>
              <MenuItem>Webinars</MenuItem>

              <MenuItem>Calendar</MenuItem>
              <MenuItem>Messages</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
          
        </Flex>
         
      </HStack>
     
    </Flex>
    
  )
}

const dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const theme = extendTheme({
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
  });
  return (
    <ChakraProvider theme={theme}>
     
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.800')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
        
        <DashboardContent />
      </Box>
    </Box>
</ChakraProvider>
  )
}

export default dashboard;
