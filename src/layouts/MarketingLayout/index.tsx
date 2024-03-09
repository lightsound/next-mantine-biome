import c from "./index.module.css";

import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MarketingLayout({ children }: { children: ReactNode }) {
	return (
		<div className={c.container}>
			<Header />
			<main className={c.main}>{children}</main>
			<Footer />
		</div>
	);
}
