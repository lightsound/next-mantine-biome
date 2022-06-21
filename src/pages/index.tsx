import type { CustomNextPage } from "next";
import { AppLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return <div>index</div>;
};

Index.getLayout = AppLayout;

export default Index;
