import { Link } from "react-router";

export default function Navbar() {

    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-4 border-b">
                <Link to="/" className="font-bold">🎬 MovieExplorer</Link>
                <Link to="/movie" className="text-sm">Movies</Link>
            </nav>
        </div>
    )
}