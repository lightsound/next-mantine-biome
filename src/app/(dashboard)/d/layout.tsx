import type { ReactNode } from "react";
import { DashboardLayout } from "~/layouts";

export default function Layout({ children }: { children: ReactNode }) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
