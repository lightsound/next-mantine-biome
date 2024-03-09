import classes from "./Header.module.css";

import { Button, Container, Group } from "@mantine/core";
import Link from "next/link";
import { ActiveButton } from "~/components/ActiveLink/ActiveButton";
import { SwitchTheme } from "~/components/Theme/SwitchTheme";

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
						{/* biome-ignore lint/nursery/useJsxKeyInIterable: TODO: Biome側のエラーと思われるため、いったん無効化 */}
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
