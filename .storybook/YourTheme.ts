import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"PP Neue Montreal"',
    fontCode: 'PP Neue Montreal',

    brandTitle: 'ReevGig Storybook',
    brandUrl: 'https://DesignguyLTD.github.io/reevgig',
    brandImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png',
    brandTarget: '_self',

    //
    colorPrimary: '#f7cf31',
    colorSecondary: '#f7cf31',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#f7cf31',
    appBorderRadius: 8,

    // Text colors
    textColor: '#070700',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#f7cf31',
    barSelectedColor: '#f7cf31',
    barHoverColor: '#f7cf31',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#070700',
    inputTextColor: '#070700',
    inputBorderRadius: 5,
});