import { Accordion, Text } from "@mantine/core";
import React from "react";

type TType = {
  children: React.ReactNode;
};
const Label = ({ children }: TType) => (
  <Text mr={"sm"} fw={"bold"} component="span">
    {children}
  </Text>
);

const Value = ({ children }: TType) => {
  return <Text>{children}</Text>;
};

const DevFields = ({ form, fields }: any) => {
  return (
    <Accordion variant="contained" multiple>
      {fields.map((field: any) => {
        const value = form.values[field];
        const dirty = form.isDirty(field);
        const touched = form.isTouched(field);
        const isValid = form.isValid(field);

        return (
          <Accordion.Item key={field} value={field}>
            <Accordion.Control>Name: {field}</Accordion.Control>
            <Accordion.Panel>
              <>
                <Label>Value</Label>
                <Value>{value}</Value>
              </>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default DevFields;
