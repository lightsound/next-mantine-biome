import classes from "./index.module.css";

import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MarketingLayout({ children }: { children: ReactNode }) {
	return (
		<div className={classes.container}>
			<Header />
			<main className={classes.main}>{children}</main>
			<Footer />
		</div>
	);
}
