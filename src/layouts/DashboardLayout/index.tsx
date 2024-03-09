import c from "./index.module.css";

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className={c.container}>
			<Navbar />
			<main className={c.main}>{children}</main>
		</div>
	);
}
