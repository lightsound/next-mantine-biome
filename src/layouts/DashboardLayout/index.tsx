import classes from "./index.module.css";

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className={classes.container}>
			<Navbar />
			<main className={classes.main}>{children}</main>
		</div>
	);
}
