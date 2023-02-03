import Navbar from 'pages/Navbar'
import { useState } from 'react'
import { Image, Input, Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Search2Icon, CloseIcon } from '@chakra-ui/icons'
import styles from './Header.module.css'
import BurgerHeader from 'pages/BurgerHeader'

const Header = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInnerContainer}>
        <div className={styles.header}>
          <a href="/" className={styles.image}>
            <Image src={require('../../images/logo.png')}></Image>
          </a>
          <div>
            <div className={styles.Navbar}>
              <Navbar />
            </div>
          </div>
          <div className={styles.searchBar}>
            {isSearchBarOpen ? (
              <button onClick={() => setIsSearchBarOpen(false)}>
                <CloseIcon />
              </button>
            ) : (
              <button onClick={() => setIsSearchBarOpen(true)}>
                <Search2Icon />
              </button>
            )}
          </div>
          <div className={styles.DrawerHeader}>
            {openBurgerMenu ? (
              <button
                onClick={() => {
                  setOpenBurgerMenu(false)
                }}
              >
                <CloseIcon />
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpenBurgerMenu(true)
                }}
              >
                <HamburgerIcon boxSize={6} />
              </button>
            )}
          </div>
        </div>
        {openBurgerMenu && <BurgerHeader inputValue={inputValue} setInputValue={setInputValue} />}
        {isSearchBarOpen && (
          <div className={styles.searchInput}>
            <Input
              placeholder="What are you looking for?"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
            {/* <Button className={styles.btn} colorScheme="yellow" onClick={(val) => {console.log(inputValue)}}>
                        Search
                    </Button> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
