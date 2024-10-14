import { Link } from "react-router-dom"
import { Button } from "./ui/button"


const Header = () => {
    return <>
        <nav className="py-4 flex justify-between items-center">
            <Link to="/">
                <img src="/logo.png" className="h-20" alt="Hirrd Logo" />
            </Link>

            <Button variant="outline">Login</Button>
        </nav>
    </>
}

export default Header