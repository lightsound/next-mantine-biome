"use client";

import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export function useMountedColorScheme() {
	const isMounted = useIsMounted();
	const { toggleColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light");

	return {
		toggleColorScheme,
		colorScheme: isMounted ? computedColorScheme : undefined,
	};
}

function useIsMounted() {
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => {
			setMounted(false);
		};
	}, []);

	return isMounted;
}
