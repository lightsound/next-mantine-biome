import classes from "./Navbar.module.css";

import { Group, ScrollArea } from "@mantine/core";
import { IconBellRinging, IconDashboard } from "@tabler/icons-react";
import { UserButton } from "~/app/(dashboard)/d/_local/DashboardLayout/UserButton";
import { ActionThemeIcon, ActiveNavLink } from "~/shared-components";

const data = [
	{ link: "/d", label: "ダッシュボード", icon: IconDashboard },
	{ link: "/d/notification", label: "お知らせ", icon: IconBellRinging },
];

export function Navbar() {
	return (
		<nav className={classes.navbar}>
			<div className={classes.header}>
				<Group justify="space-between">
					ロゴ
					<ActionThemeIcon />
				</Group>
			</div>

			<ScrollArea className={classes.links}>
				<div className={classes.linksInner}>
					{data.map((item) => (
						<ActiveNavLink
							key={item.label}
							href={item.link}
							label={item.label}
							leftSection={<item.icon size="1.2rem" stroke={1.5} />}
						/>
					))}
				</div>
			</ScrollArea>

			<div className={classes.footer}>
				<UserButton />
			</div>
		</nav>
	);
}
