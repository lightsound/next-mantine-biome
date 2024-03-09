import classes from "./Navbar.module.css";

import { Group, ScrollArea } from "@mantine/core";
import {
	IconBellRinging,
	IconChevronRight,
	IconDashboard,
} from "@tabler/icons-react";
import Link from "next/link";
import { ActiveNavLink } from "~/components/ActiveLink/ActiveNavLink";
import { ActionThemeIcon } from "~/components/Theme/ActionThemeIcon";
import { User } from "~/components/User";

const data = [
	{ link: "/d", label: "ダッシュボード", icon: IconDashboard },
	{ link: "/d/notification", label: "お知らせ", icon: IconBellRinging },
] as const;

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
					{/* biome-ignore lint/nursery/useJsxKeyInIterable: TODO: Biome側のエラーと思われるため、いったん無効化 */}
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
				<Link href="/d/settings" className={classes.userLink}>
					<Group wrap="nowrap">
						<User
							name="しまぶーしまぶーしまぶーしまぶーしまぶー"
							email="shimabu@example.com"
							src="/user.webp"
						/>
						<IconChevronRight size={14} stroke={1.5} />
					</Group>
				</Link>
			</div>
		</nav>
	);
}
