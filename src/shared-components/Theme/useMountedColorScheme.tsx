"use client";

import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useCallback, useEffect, useRef } from "react";

export function useMountedColorScheme() {
	const isMounted = useIsMounted();
	const { toggleColorScheme } = useMantineColorScheme({
		keepTransitions: true,
	});
	const color = useComputedColorScheme(undefined, {
		getInitialValueInEffect: true,
	});

	return {
		toggleColorScheme,
		colorScheme: isMounted() ? color : undefined,
	};
}

function useIsMounted(): () => boolean {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);

	return useCallback(() => isMounted.current, []);
}
