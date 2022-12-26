import { useNavigate } from 'react-router-dom'
import {
    useDisclosure,
    useColorModeValue,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

export type SubNavProps = {
    title: string,
    path: string
}

type NavbuttonWithSubnavProps = {
    title: string,
    path: string,
    subNav: SubNavProps[]
}

const NavbuttonWithSubnav = ({title, path, subNav}: NavbuttonWithSubnavProps) => {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={2}
                my={5}
                py={[1, 1, 2]}
                px={1.5}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("#fac548", "#fac548") }}
                fontWeight="bold"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                onClick={() => navigate(path)}
            >
                {title} {subNav.length > 0 ? <ChevronDownIcon/> : null}
            </MenuButton>
            {subNav.length > 0 &&
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} zIndex={10} >
                    {subNav.map((info, idx) => (
                        <MenuItem key={idx} onClick={() => navigate(info.path)} _hover={{ bg: "#fac548" }}>{info.title}</MenuItem>
                    ))}
                </MenuList>
            }
        </Menu>
    )
}

export default NavbuttonWithSubnav