import type {Preview} from "@storybook/react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    tags: ["autodocs"]
};

const link = document.createElement('link');
link.href = 'https://fonts.cdnfonts.com/css/pp-neue-montreal';
link.rel = 'stylesheet';
document.head.appendChild(link);

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
    body {
        font-family: 'pp-neue-montreal';
        font-weight: 400; /* Default to regular (400) */
    }
`;
document.head.appendChild(globalStyles);

export default preview;
