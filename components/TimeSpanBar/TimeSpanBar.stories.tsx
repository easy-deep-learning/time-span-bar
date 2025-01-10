import type { Meta, StoryObj } from "@storybook/react";

import { TimeSpanBar } from "./TimeSpanBar";

const meta: Meta<typeof TimeSpanBar> = {
  title: "Components/TimeSpanBar",
  component: TimeSpanBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    startDate: { control: "date" },
    endDate: { control: "date" },
    width: { control: "number" },
    height: { control: "number" },
    backgroundColor: { control: "color" },
    borderRadius: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof TimeSpanBar>;

// Basic example
export const Default: Story = {
  args: {
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    width: 300,
    height: 20,
  },
};

// Short time span
export const ShortTimeSpan: Story = {
  args: {
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-07"),
    width: 300,
    height: 20,
    backgroundColor: "#e0e0e0",
  },
};

// Custom styled
export const CustomStyled: Story = {
  args: {
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-30"),
    width: 400,
    height: 30,
    backgroundColor: "#4CAF50",
    borderRadius: 15,
  },
};
