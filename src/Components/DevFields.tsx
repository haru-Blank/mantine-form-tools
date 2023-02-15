import { Accordion, Box, createStyles, Text } from "@mantine/core";
import React from "react";

type TType = {
  children: React.ReactNode;
};

const Label = ({ children }: TType) => (
  <Text mr={"sm"} fw={"bold"} component="span" tt={"capitalize"}>
    {children}:
  </Text>
);

const Value = ({ value }: any) => {
  const valueType = typeof value;
  let valueToDisplay;
  let valueColor;

  if (valueType === "boolean") {
    valueToDisplay = value ? "True" : "False";
    valueColor = value ? "green" : "red";
  } else {
    valueToDisplay = value;
  }
  return (
    <Text component="span" color={valueColor}>
      {valueToDisplay}
    </Text>
  );
};

const useStyles = createStyles((theme) => ({
  control: {
    "&[data-active=true]": {
      background: theme.colors.cyan[2],
    },
  },
}));

const DevFields = ({ form }: any) => {
  const fields = Object.keys(form.values);
  const { classes } = useStyles();

  return (
    <Accordion variant="contained" multiple>
      {fields.map((field: any) => {
        const data = {
          value: form.values[field],
          dirty: form.isDirty(field),
          touched: form.isTouched(field),
          isValid: form.isValid(field),
        };

        const fieldsToDisplay = Object.keys(data);

        return (
          <Accordion.Item key={field} value={field}>
            <Accordion.Control className={classes.control}>
              {field}
            </Accordion.Control>
            <Accordion.Panel>
              <>
                {fieldsToDisplay.map((field) => {
                  return (
                    <Box key={field + "xyz"}>
                      <Label>{field}</Label>
                      <Value value={data[field]} />
                    </Box>
                  );
                })}
              </>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default DevFields;
