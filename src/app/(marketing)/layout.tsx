import type { ReactNode } from "react";
import { MarketingLayout } from "./_local";

export default function Layout({ children }: { children: ReactNode }) {
	return <MarketingLayout>{children}</MarketingLayout>;
}
