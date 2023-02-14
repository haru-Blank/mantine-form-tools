import { Box, createStyles, ThemeIcon } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/types";
import ToolsIcon from "./ToolsIcon";

const useStyles = createStyles((theme) => ({
  toolsIcon: {
    position: "fixed",
    top: theme.spacing.md,
    right: theme.spacing.md,
  },
}));

const DevTools = ({ form }: any) => {
  const { classes } = useStyles();
  return (
    <Box>
      <ThemeIcon className={classes.toolsIcon}>
        <ToolsIcon />
      </ThemeIcon>
    </Box>
  );
};

export default DevTools;
