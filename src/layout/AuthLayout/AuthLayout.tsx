import { Center, Container } from "@mantine/core";
import type { CustomLayout } from "next";

import { LayoutErrorBoundary } from "../LayoutErrorBoundary";

export const AuthLayout: CustomLayout = (page) => {
  return (
    <Center
      sx={(theme) => {
        return {
          backgroundColor: theme.colors.gray[0],
          minHeight: "100vh",
        };
      }}
    >
      <Container size="xs" sx={{ paddingBottom: 16, width: 480 }}>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Container>
    </Center>
  );
};
