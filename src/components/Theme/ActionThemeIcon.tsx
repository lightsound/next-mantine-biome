"use client";

import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useMountedColorScheme } from "./useMountedColorScheme";

export function ActionThemeIcon(props: ActionIconProps) {
	const { toggleColorScheme, colorScheme } = useMountedColorScheme();

	return (
		<ActionIcon
			variant="default"
			aria-label="Toggle theme"
			onClick={toggleColorScheme}
			loading={colorScheme === undefined}
			{...props}
		>
			{colorScheme === "light" ? (
				<IconMoon size="1rem" stroke={1.5} />
			) : (
				<IconSun size="1rem" stroke={1.5} />
			)}
		</ActionIcon>
	);
}
