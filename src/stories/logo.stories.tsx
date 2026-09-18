import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import { Logo } from "@/ui/logo";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Logo> & TypedMetaOptions = {
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const LogoStory: Story = {
  args: {},
};
