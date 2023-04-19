import Link from "next/link";
import { useRouter } from "next/router";

export const ActiveLink = ({ text, href }) => {
  const style = {
    color: "#0070f3",
    textDecoration: "underline",
  };

  //custom hook
  const { asPath } = useRouter();

  return (
    //style segun el path seleccionado
    <Link href={href} style={asPath === href ? style : null}>
      {text}
    </Link>
  );
};

export default ActiveLink;
