import classes from "./index.module.css";

import { Avatar, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

export function User({
	name,
	email,
	src,
}: { name: string; email: string; src: string }) {
	return (
		<Group wrap="nowrap" className={classes.user}>
			<Avatar>
				<Image src={src} alt="User image" fill={true} />
			</Avatar>

			<Stack gap={2} className={classes.stack}>
				<Text size="sm" lineClamp={1}>
					{name}
				</Text>
				<Text c="dimmed" size="xs" lineClamp={1}>
					{email}
				</Text>
			</Stack>
		</Group>
	);
}
