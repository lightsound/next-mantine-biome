import type { CustomLayout } from "next";

import { LayoutErrorBoundary } from "../LayoutErrorBoundary";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout: CustomLayout = (page) => {
  return (
    <>
      <Header />
      <LayoutErrorBoundary>
        <main>{page}</main>
      </LayoutErrorBoundary>
      <Footer />
    </>
  );
};
