import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            {/* Header */}
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer>
                <p>All Rights Reserved</p>
            </footer>
        </>
    )

}

export default MainLayout;