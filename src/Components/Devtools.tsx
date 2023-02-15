import {
  Box,
  createStyles,
  Flex,
  Stack,
  ThemeIcon,
  Text,
  Transition,
  Accordion,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/types";
import { useToggle } from "@mantine/hooks";
import CloudIcons from "./CloudIcons";
import ToolsIcon from "./ToolsIcon";

const useStyles = createStyles((theme) => ({
  devToolsContainer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: 256,
    padding: theme.spacing.md,
    height: "100vh",
    overflow: "scroll",
    backgroundColor: theme.colors.red[5],
  },
  toolsIcon: {
    position: "fixed",
    top: theme.spacing.md,
    right: theme.spacing.md,
    zIndex: 1000,
  },
}));

const DevTools = ({ form }: any) => {
  const { classes } = useStyles();
  const [showDevTools, toggleDevTools] = useToggle([true, false]);

  return (
    <>
      <Flex justify={"end"}>
        <ThemeIcon
          size={16}
          className={classes.toolsIcon}
          onClick={() => toggleDevTools()}
        >
          <ToolsIcon />
        </ThemeIcon>
      </Flex>

      <Transition
        mounted={showDevTools}
        transition="slide-left"
        duration={500}
        timingFunction="ease-in"
      >
        {(styles) => (
          <Box className={classes.devToolsContainer}>
            <Stack>
              <Text
                component="h2"
                m="0"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <ThemeIcon size={24} sx={{ background: "transparent" }}>
                  <CloudIcons />
                </ThemeIcon>
                Mantine Form Tools
              </Text>
            </Stack>
          </Box>
        )}
      </Transition>
    </>
  );
};

export default DevTools;
