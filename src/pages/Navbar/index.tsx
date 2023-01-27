import NavbuttonWithSubnav from "./NavbuttonWIthSubnav"
import { navs } from "constants/navs"

const Navbar = () => {
    return(
        <div>
        {
            navs.map((navButtonInfo, idx) => (
                <NavbuttonWithSubnav key={idx} title={navButtonInfo.title} path={navButtonInfo.path} subNav={navButtonInfo.subNav}/>
            ))
        }
        </div>
    )
}

export default Navbar