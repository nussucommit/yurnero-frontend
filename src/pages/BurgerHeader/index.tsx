import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { navs } from "../../constants/navs"
import styles from './BurgerHeader.module.css'
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"

type BurgerHeaderProps = {
    inputValue: string;
    setInputValue: (param: string) => void
}

const BurgerHeader = ({inputValue, setInputValue}: BurgerHeaderProps) => {
    const navigate = useNavigate()
    return (
        <>
            <InputGroup className={styles.Input}>
                <InputLeftElement 
                    children={<Search2Icon />}
                />
                <Input placeholder="What are you looking for?" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            </InputGroup>
            <div>
                {
                    navs.map((nav, idx) => (
                        <div className={styles.Nav}>
                            <div key={idx}>
                                <div className={styles.NavTitle}>
                                    <button className={styles.NavButtonTitle} onClick={() => navigate(nav.path)}>{nav.title}</button>
                                    {nav.subNav.length > 0 && <div className={styles.NavButtonDropdownIcon}><ChevronDownIcon /></div>}
                                </div>
                            </div>
                            {nav.subNav.length > 0 && 
                                <div className={styles.SubNavs}>
                                    {nav.subNav.map((subNav) => (
                                        <div>
                                            <button className={styles.SubNavButtonTitle} onClick={() => navigate(subNav.path)}>{subNav.title}</button>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BurgerHeader