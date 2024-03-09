// Import styles of packages that you've installed. All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="ja">
			<head>
				<ColorSchemeScript defaultColorScheme="auto" />
			</head>
			<body>
				<MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
			</body>
		</html>
	);
}

export const runtime = "edge";
