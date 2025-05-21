import type { Meta, StoryObj } from "@storybook/nextjs";

import { TimeSpanBar } from "./TimeSpanBar";
import { LEONID_BREZHNEV_LIFE_BAR } from "../../utils/mocks/TimeSpanBar.mock";

const meta: Meta<typeof TimeSpanBar> = {
  title: "Components/TimeSpanBar",
  component: TimeSpanBar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    start: { control: "object" },
    end: { control: "object" },
    events: {
      control: "object",
      options: ["Event 1", "Event 2", "Event 3", "Event 4"],
      mapping: {
        "Event 1": {
          name: "Event 1",
          info: {
            date: new Date("2024-02-15"),
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NikitaNina.JPG/440px-NikitaNina.JPG",
            location: {
              name: "Moscow",
              latitude: 55.7558,
              longitude: 37.6173,
            },
          },
        },
        "Event 2": {
          name: "Event 2",
          info: {
            date: new Date("2024-04-20"),
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Joseph_Stalin_and_Nikita_Khrushchev%2C_1936.jpg/440px-Joseph_Stalin_and_Nikita_Khrushchev%2C_1936.jpg",
            location: {
              name: "Moscow",
              latitude: 55.7558,
              longitude: 37.6173,
            },
          },
        },
        "Event 3": {
          name: "Event 3",
          info: {
            date: new Date("2024-06-10"),
            image:
              "https://upload.wikimedia.org/wikipedia/commons/d/dc/Nikita_Khrushchev-TIME-1953.jpg",
            location: {
              name: "Moscow",
              latitude: 55.7558,
              longitude: 37.6173,
            },
          },
        },
        "Event 4": {
          name: "Event 4",
          info: {
            date: new Date("2024-08-30"),
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NikitaNina.JPG/440px-NikitaNina.JPG",
            location: {
              name: "Moscow",
              latitude: 55.7558,
              longitude: 37.6173,
            },
          },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimeSpanBar>;

// Basic example
export const Default: Story = {
  args: { ...LEONID_BREZHNEV_LIFE_BAR },
};
