import { MainLayout } from "../../../components/layouts/mainLayout";
import Link from "next/link";

export const index = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </MainLayout>
  );
};

export default index;
