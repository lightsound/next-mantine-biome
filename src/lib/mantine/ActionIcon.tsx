import type { ActionIconProps } from "@mantine/core";
// eslint-disable-next-line no-restricted-imports
import { ActionIcon as MantineActionIcon } from "@mantine/core";
import { cloneElement, forwardRef } from "react";

export const ActionIcon = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ActionIconProps<"button" | "a"> & { dent?: boolean }
>(({ dent, sx, ...props }, ref) => {
  return cloneElement(<MantineActionIcon />, {
    sx: {
      ...sx,
      "&:not(:disabled):active": dent ? undefined : { transform: "none" },
    },
    ref,
    ...props,
  });
});

ActionIcon.displayName = "ActionIcon";
