import { Text, ThemeIcon } from "@mantine/core";
import CloudIcons from "./CloudIcons";

const ToolsHeader = () => {
  return (
    <Text
      component="h2"
      m="0"
      p={"md"}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: 4,
        backgroundColor: theme.colors.blue[4],
      })}
    >
      <ThemeIcon size={24} sx={{ background: "transparent" }}>
        <CloudIcons />
      </ThemeIcon>
      Mantine Form Tools
    </Text>
  );
};

export default ToolsHeader;
