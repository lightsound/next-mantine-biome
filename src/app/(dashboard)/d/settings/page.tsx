import { Button, Stack } from "@mantine/core";
import Link from "next/link";

export default function Page() {
	return (
		<Stack align="flex-start">
			設定ページ
			<Button component={Link} href="/">
				ログアウト
			</Button>
		</Stack>
	);
}
