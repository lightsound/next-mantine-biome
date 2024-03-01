import classes from "./Footer.module.css";

import { Anchor, Container, Group } from "@mantine/core";

const links = [
	{ link: "#", label: "運営会社" },
	{ link: "#", label: "利用規約" },
	{ link: "#", label: "プライバシーポリシー" },
	{ link: "#", label: "お問い合わせ" },
];

export function Footer() {
	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				ロゴ
				<Group className={classes.links}>
					{links.map((link) => (
						<Anchor<"a"> c="dimmed" key={link.label} href={link.link} size="sm">
							{link.label}
						</Anchor>
					))}
				</Group>
			</Container>
		</footer>
	);
}
