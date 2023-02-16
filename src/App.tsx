import {
  Button,
  Checkbox,
  Container,
  PasswordInput,
  Select,
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
    name: "gender",
    label: "Gender",
    placeholder: "M/F/O",
    Component: Select,
    required: true,
    data: [
      { label: "Male", value: "M" },
      { label: "Female", value: "F" },
      { label: "Others", value: "O" },
    ],
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
      gender: "",
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
    const { name, label, placeholder, Component, ...rest } = field;

    return (
      <Component
        {...{
          key: name,
          label,
          placeholder,
          ...rest,
          ...form.getInputProps(field.name),
        }}
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
