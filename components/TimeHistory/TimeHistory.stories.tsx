import type { Meta, StoryObj } from "@storybook/nextjs";

import TimeHistory from "./TimeHistory";
import {
  KHRUSHCHEV_LIFE_BAR,
  PINK_FLOYD_LIFE_BAR,
  LEONID_BREZHNEV_LIFE_BAR,
  LENIN_LIFE_BAR,
  STALIN_LIFE_BAR,
  GORBACHEV_LIFE_BAR,
  ANDROPOV_LIFE_BAR,
  CHERNENKO_LIFE_BAR,
  YELTSIN_LIFE_BAR,
  PUTIN_LIFE_BAR,
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
      { ...PINK_FLOYD_LIFE_BAR },
      { ...LENIN_LIFE_BAR },
      { ...STALIN_LIFE_BAR },
      { ...KHRUSHCHEV_LIFE_BAR },
      { ...LEONID_BREZHNEV_LIFE_BAR },
      { ...ANDROPOV_LIFE_BAR },
      { ...CHERNENKO_LIFE_BAR },
      { ...GORBACHEV_LIFE_BAR },
      { ...YELTSIN_LIFE_BAR },
      { ...PUTIN_LIFE_BAR },
    ],
  },
};
