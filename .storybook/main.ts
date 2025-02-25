import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  webpackFinal: (config: any = { module: { rules: [] } }) => {
    if (!config.module?.rules) {
      config.module = { rules: [] };
    }

    const cssRule = config.module.rules.find((rule: any) =>
      rule?.test?.toString().includes("css")
    );

    if (cssRule) {
      cssRule.test = /\.css$/;
      cssRule.exclude = /\.module\.css$/;
    }

    // Add specific rule for CSS Modules
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
        },
      ],
    });

    return config;
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;
