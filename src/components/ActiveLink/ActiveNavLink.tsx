"use client";

import {
	NavLink,
	type NavLinkProps,
	type PolymorphicComponentProps,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = PolymorphicComponentProps<typeof Link, NavLinkProps>;

export function ActiveNavLink(navLinkProps: Props) {
	const pathname = usePathname();

	return (
		<NavLink
			component={Link}
			active={navLinkProps.href === pathname}
			{...navLinkProps}
		/>
	);
}
