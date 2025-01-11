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
    events: {
      control: "multi-select",
      options: ["Event 1", "Event 2", "Event 3", "Event 4"],
      mapping: {
        "Event 1": { name: "Event 1", date: new Date("2024-02-15") },
        "Event 2": { name: "Event 2", date: new Date("2024-04-20") },
        "Event 3": { name: "Event 3", date: new Date("2024-06-10") },
        "Event 4": { name: "Event 4", date: new Date("2024-08-30") },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimeSpanBar>;

// Basic example
export const Default: Story = {
  args: {
    header: "Хрущёв, Никита Сергеевич",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bundesarchiv_Bild_183-B0628-0015-035%2C_Nikita_S._Chruschtschow.jpg?uselang=ru",
    startDate: new Date("1894-04-15"),
    endDate: new Date("1971-09-11"),
    events: [
      { name: "Event 1", date: new Date("2024-02-15") },
      { name: "Event 2", date: new Date("2024-04-20") },
    ],
  },
};
