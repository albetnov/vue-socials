import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SGithubGistCount from '../SGithubGistCount';

export default {
  title: 'Count/SGithubGistCount',
  component: SGithubGistCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SGithubGistCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-github-gist-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-github-gist-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    gistId: 'e3683b03ba936ade91d33dbc721cd6d8',
    type: 'fork',
  },
};