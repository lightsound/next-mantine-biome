import type { ReactNode } from "react";
import { MarketingLayout } from "~/layouts/MarketingLayout";

export default function Layout({ children }: { children: ReactNode }) {
	return <MarketingLayout>{children}</MarketingLayout>;
}
