import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

  const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
  };

interface Props {
  text: string; //son obligatorias xq no les pongo signo de ?
  href: string;
}
export const ActiveLink: FC<Props> = ({ text, href }) => {

  //custom hook
  const { asPath } = useRouter();

  return (
    //style segun el path seleccionado
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};

export default ActiveLink;
