"use client";

import { Switch, type SwitchProps, useMantineTheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useMountedColorScheme } from "./useMountedColorScheme";

export function SwitchTheme(props: SwitchProps) {
	const theme = useMantineTheme();
	const { toggleColorScheme, colorScheme } = useMountedColorScheme();

	return (
		<Switch
			size="md"
			onChange={toggleColorScheme}
			checked={colorScheme === "dark"}
			disabled={!colorScheme}
			onLabel={<IconSun size={16} color={theme.colors.yellow[4]} />}
			offLabel={<IconMoon size={16} color={theme.colors.blue[6]} />}
			{...props}
		/>
	);
}
