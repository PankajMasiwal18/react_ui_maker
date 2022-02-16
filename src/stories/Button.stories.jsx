import React from "react";

import { Button } from "../Components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  bgColor: "blue",
  children: "Blue",
};

export const Red = Template.bind({});
Red.args = {
  bgColor: "red",
  children: "Red",
};

export const Orange = Template.bind({});
Orange.args = {
  bgColor: "orange",
  children: "Orange",
};

export const Yellow = Template.bind({});
Yellow.args = {
  bgColor: "yellow",
  children: "Yellow",
};

export const Green = Template.bind({});
Green.args = {
  bgColor: "green",
  children: "Green",
};

export const Indigo = Template.bind({});
Indigo.args = {
  bgColor: "indigo",
  children: "Indigo",
};

export const Violet = Template.bind({});
Violet.args = {
  bgColor: "violet",
  children: "Violet",
};

export const Gray = Template.bind({});
Gray.args = {
  bgColor: "gray",
  children: "Gray",
};

export const Black = Template.bind({});
Black.args = {
  bgColor: "black",
  children: "Black",
};
