import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { CustomNextPage } from "next";
import { AuthLayout } from "src/layout";

const SignIn: CustomNextPage = () => {
  const form = useForm({ initialValues: { email: "", termsOfService: true } });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        // eslint-disable-next-line no-console
        return console.log(values);
      })}
    >
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};

SignIn.getLayout = AuthLayout;

export default SignIn;
