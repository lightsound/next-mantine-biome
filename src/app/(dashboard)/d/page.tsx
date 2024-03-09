import c from "./page.module.css";

import { Paper } from "@mantine/core";
import Link from "next/link";
import { User } from "~/components/User";

export default function Page() {
	return (
		<Paper
			component={Link}
			href="/d/shimabu"
			className={c.link}
			withBorder={true}
		>
			<User
				name="しまぶーしまぶーしまぶーしまぶーしまぶー"
				email="shimabu@example.com"
				src="/user.webp"
			/>
		</Paper>
	);
}
