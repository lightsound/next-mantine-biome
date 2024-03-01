import type { ReactNode } from "react";
import { MarketingLayout } from "~/layouts";

export default function Layout({ children }: { children: ReactNode }) {
	return <MarketingLayout>{children}</MarketingLayout>;
}
