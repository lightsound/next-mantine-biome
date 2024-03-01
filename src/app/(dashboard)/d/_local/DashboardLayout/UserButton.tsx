import classes from "./UserButton.module.css";

import { Avatar, Group, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function UserButton() {
	return (
		<Link href="/d/settings" className={classes.user}>
			<Group wrap="nowrap">
				<Avatar>
					<Image src="/user.webp" alt="User image" fill={true} />
				</Avatar>

				<Stack gap={2} className={classes.stack}>
					<Text size="sm" lineClamp={1}>
						しまぶーしまぶーしまぶーしまぶーしまぶー
					</Text>

					<Text c="dimmed" size="xs" lineClamp={1}>
						shimabu@example.com
					</Text>
				</Stack>

				<IconChevronRight size={14} stroke={1.5} />
			</Group>
		</Link>
	);
}
