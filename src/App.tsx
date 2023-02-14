import {
  Button,
  Checkbox,
  Container,
  PasswordInput,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import DevTools from "./Components/Devtools";

const fields = [
  {
    name: "firstname",
    label: "First Name",
    placeholder: "John",
    Component: TextInput,
  },
  {
    name: "lastname",
    label: "Last Name",
    placeholder: "Doe",
    Component: TextInput,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "johndoe@mantine.dev",
    Component: TextInput,
  },
  {
    name: "password",
    label: "Passworod",
    placeholder: "********",
    Component: PasswordInput,
  },
  {
    name: "remember_me",
    label: "Remember Me",
    Component: Checkbox,
  },
];

const App = () => {
  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      remember_me: false,
    },

    validate: {
      firstname: (value) =>
        value.length < 3 ? "First name, no less than 3 char" : null,
      lastname: (value) =>
        value.length < 3 ? "Last name, no less than 3 char" : null,
      password: (value) =>
        value.length < 8 ? "Password, no less than 8 char" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const formFields = fields.map((field) => {
    const { name, label, placeholder, Component } = field;
    return (
      <Component
        key={name}
        {...form.getInputProps(field.name)}
        label={label}
        placeholder={placeholder}
      />
    );
  });
  return (
    <Container size={"xs"} pt="xl">
      <Text>Sign Up?</Text>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        <SimpleGrid>
          {formFields}
          <Button type="submit">Sign Up</Button>
        </SimpleGrid>
      </form>
      <DevTools form={form} />
    </Container>
  );
};

export default App;
