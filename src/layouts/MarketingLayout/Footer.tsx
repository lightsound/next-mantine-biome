import c from "./Footer.module.css";

import { Anchor, Container, Group } from "@mantine/core";

const links = [
	{ link: "#", label: "運営会社" },
	{ link: "#", label: "利用規約" },
	{ link: "#", label: "プライバシーポリシー" },
	{ link: "#", label: "お問い合わせ" },
] as const;

export function Footer() {
	return (
		<footer className={c.footer}>
			<Container className={c.inner}>
				ロゴ
				<Group className={c.links}>
					{/* biome-ignore lint/nursery/useJsxKeyInIterable: TODO: Biome側のエラーと思われるため、いったん無効化 */}
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
