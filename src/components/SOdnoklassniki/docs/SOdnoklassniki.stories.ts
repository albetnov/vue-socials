import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SOdnoklassniki, { ISOdnoklassnikiShareOptions } from '../SOdnoklassniki';

export default {
  title: 'Share/SOdnoklassniki',
  component: SOdnoklassniki,
};

const Template: Story<TBaseSocialPropsOptions<ISOdnoklassnikiShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SOdnoklassniki },
  methods: {
    onClose: action('emit close'),
    onOpen: action('emit open'),
    onBlock: action('emit block'),
    onFocus: action('emit focus'),
  },
  template: `
    <s-odnoklassniki
      class="base-social"
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg
      aria-hidden="true" focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24" viewBox="0 0 389.404 387.417"
      enable-background="new 0 0 389.404 387.417"
    >
      <g>
        <path fill="#000000" d="M389.404,330.724c0,31.312-25.383,56.693-56.693,56.693H56.693C25.382,387.417,0,362.036,0,330.724V56.693C0,25.382,25.382,0,56.693,0h276.018c31.311,0,56.693,25.382,56.693,56.693V330.724z"
        />
        <path fill="#000000" d="M387.404,329.317c0,30.989-25.122,56.11-56.111,56.11H58.11c-30.989,0-56.11-25.121-56.11-56.11V58.1C2,27.111,27.122,1.99,58.11,1.99h273.183c30.989,0,56.111,25.122,56.111,56.11V329.317z"
        />
        <path fill="#FFFFFF" d="M194.485,57.901c-38.593,0-69.878,31.286-69.878,69.878c0,38.593,31.285,69.881,69.878,69.881s69.878-31.288,69.878-69.881C264.363,89.187,233.078,57.901,194.485,57.901z M194.485,156.667c-15.953,0-28.886-12.934-28.886-28.887s12.933-28.886,28.886-28.886s28.886,12.933,28.886,28.886S210.438,156.667,194.485,156.667z"
        />
        <g>
          <path fill="#FFFFFF" d="M219.155,253.262c27.975-5.699,44.739-18.947,45.626-19.658c8.186-6.565,9.501-18.523,2.936-26.71c-6.564-8.186-18.521-9.501-26.709-2.937c-0.173,0.14-18.053,13.856-47.472,13.876c-29.418-0.02-47.676-13.736-47.849-13.876c-8.188-6.564-20.145-5.249-26.709,2.937c-6.565,8.187-5.25,20.145,2.936,26.71c0.899,0.721,18.355,14.314,47.114,19.879l-40.081,41.888c-7.284,7.554-7.065,19.582,0.489,26.866c3.687,3.555,8.439,5.322,13.187,5.322c4.978,0,9.951-1.945,13.679-5.812l37.235-39.665l40.996,39.922c7.428,7.416,19.456,7.404,26.87-0.021c7.414-7.426,7.405-19.456-0.021-26.87L219.155,253.262z"
          />
          <path fill="#FFFFFF"
                d="M193.536,217.832c-0.047,0,0.046,0.001,0,0.002C193.49,217.833,193.583,217.832,193.536,217.832z"
          />
        </g>
      </g>
    </svg>

    </s-odnoklassniki>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
  },
  useNativeBehavior: false,
};
