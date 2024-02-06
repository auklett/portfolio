import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Paul Sim
            </a>
            <div className={styles.menu}>
                <div className={styles.menuBtn}>
                    <Hamburger 
                        onToggle={() => setMenuOpen(!menuOpen)}
                    />
                </div>
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    //onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
