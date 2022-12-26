import Navbar from "pages/Navbar"
import { useState } from "react"
import { Container, Image, Input, Button } from '@chakra-ui/react'
import { Search2Icon, CloseIcon } from '@chakra-ui/icons'

import styles from './Header.module.css'

const Header = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInnerContainer}>
                <div className={styles.header}>
                    <a href="/" className={styles.image}>
                        <Image src={require('./logo.png')}></Image>
                    </a>
                    <Navbar />
                    <div className={styles.searchBar}>
                        {isSearchBarOpen ?
                        (
                            <button onClick={() => setIsSearchBarOpen(false)}><CloseIcon/></button>
                        )
                        :
                        (
                            <button onClick={() => setIsSearchBarOpen(true)}><Search2Icon/></button>
                        )}
                    </div>
                </div>
                {isSearchBarOpen &&
                <div className={styles.searchInput}>
                    <Input placeholder="What are you looking for?" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    <Button className={styles.btn} colorScheme="yellow" onClick={(val) => {console.log(inputValue)}}>
                        Search
                    </Button>
                </div>
                }
            </div>
        </div>
    )
}

export default Header