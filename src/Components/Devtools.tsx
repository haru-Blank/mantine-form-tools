import { Box, createStyles, Flex, ThemeIcon, Transition } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/types";
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
  return (
    <>
      <Flex justify={"end"}>
        <ThemeIcon className={classes.toolsIcon}>
          <ToolsIcon />
        </ThemeIcon>
      </Flex>
      <Transition
        mounted={true}
        transition="slide-left"
        duration={500}
        timingFunction="ease-in"
      >
        {(styles) => (
          <Box className={classes.devToolsContainer}>hello dev tools</Box>
        )}
      </Transition>
    </>
  );
};

export default DevTools;
