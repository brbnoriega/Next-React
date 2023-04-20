import { ActiveLink } from "./ActiveLink";
import styles from "../components/Navbar.module.css";
export const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ text, href }) => ( //desestructuro y tomo el texto y el href que viene del objeto
        <ActiveLink key={href} text={text} href={href} />
      ))}
      {/* <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
      <ActiveLink text="Pricing" href="/pricing" /> */}
    </nav>
  );
};

export default Navbar;
