import type { ReactNode } from "react";
import { DashboardLayout } from "./_local";

export default function Layout({ children }: { children: ReactNode }) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
