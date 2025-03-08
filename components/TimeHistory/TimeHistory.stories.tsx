import type { Meta, StoryObj } from "@storybook/react";

import TimeHistory from "./TimeHistory";
import {
  KHRUSHCHEV_LIFE_BAR,
  PINK_FLOYD_LIFE_BAR,
  LEONID_BREZHNEV_LIFE_BAR,
} from "../../utils/mocks/TimeSpanBar.mock";

const meta: Meta<typeof TimeHistory> = {
  title: "Components/TimeHistory",
  component: TimeHistory,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof TimeHistory>;

export const Default: Story = {
  args: {
    historyItems: [
      { ...KHRUSHCHEV_LIFE_BAR },
      { ...LEONID_BREZHNEV_LIFE_BAR },
      { ...PINK_FLOYD_LIFE_BAR },
    ],
    range: {
      start: new Date("1900-01-01"),
      end: new Date("2025-01-01"),
    },
  },
};
