import classes from "./Header.module.css";

import { Button, Container, Group } from "@mantine/core";
import Link from "next/link";
import { ActiveButton, SwitchTheme } from "~/components";

const links = [
	{ href: "/", label: "ホーム" },
	{ href: "/pricing", label: "料金" },
];

export function Header() {
	return (
		<header className={classes.header}>
			<Container size="md" className={classes.inner}>
				<Group gap={40}>
					ロゴ
					<Group component="nav" gap={8}>
						{links.map((link) => (
							<ActiveButton key={link.label} href={link.href}>
								{link.label}
							</ActiveButton>
						))}
					</Group>
				</Group>

				<Group>
					<SwitchTheme />
					<Button component={Link} href="/d">
						ログイン
					</Button>
				</Group>
			</Container>
		</header>
	);
}
