import Link from "next/link";
import styles from '../components/Navbar.module.css';
export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
 
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
   
    </nav>
  );
};

export default Navbar;
