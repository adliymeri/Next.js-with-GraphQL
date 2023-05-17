import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
function Header() {
    return (
        <nav className={styles.main}>
            <ul className={styles.nav}>
                <div className={styles.left}>
                    <li>
                        <Link className={styles.link} href="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className={styles.spaceLeft}>
                        <Link className={styles.link} href="/projects">
                            PROJECTS
                        </Link>
                    </li>
                </div>
                <img className="header-logo" src="/photos/Group 2.png"></img>
                <div className={styles.right}>
                    <li className={styles.spaceRight}>
                        <Link className={styles.link} href="/news">
                            NEWS
                        </Link>
                    </li>
                    <li className={styles.right}>
                        <Link className={styles.link} href="/contact">
                            CONTACT
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
        
    )
}

export default Header