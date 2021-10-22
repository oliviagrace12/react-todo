import { ThemeContext } from './Contexts'
import { useContext } from 'react'

const Header = ({ text }) => {
    const { primaryColor } = useContext(ThemeContext)
    return <h1 style={{ color: primaryColor }}>{text}</h1>
}

export default Header