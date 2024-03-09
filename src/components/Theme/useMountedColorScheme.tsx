"use client";

import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export function useMountedColorScheme() {
	const isMounted = useIsMounted();
	const { toggleColorScheme } = useMantineColorScheme({
		keepTransitions: true,
	});
	const color = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	return {
		toggleColorScheme,
		colorScheme: isMounted ? color : undefined,
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
