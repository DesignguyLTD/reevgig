import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'poppins',

    brandTitle: 'ReevGig Storybook',
    brandUrl: 'https://DesignguyLTD.github.io/reevgig',
    brandImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png',
    brandTarget: '_self',

    //
    colorPrimary: '#f7cf31',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 8,

    // Text colors
    textColor: '#070700',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barHoverColor: '#585C6D',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#070700',
    inputTextColor: '#070700',
    inputBorderRadius: 5,
});