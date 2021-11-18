import { ThemeContext } from './Contexts'
import { useContext } from 'react'
import { Navbar } from 'react-bootstrap'

const Header = ({ text }) => {
    const { primaryColor } = useContext(ThemeContext)
    return <Navbar.Brand style={{ color: primaryColor }}>{text}</Navbar.Brand>
}

export default Header