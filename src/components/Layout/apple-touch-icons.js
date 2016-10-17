import icon114 from './apple-touch-icon-images/apple-touch-icon-114x114.png';
import icon120 from './apple-touch-icon-images/apple-touch-icon-120x120.png';
import icon144 from './apple-touch-icon-images/apple-touch-icon-144x144.png';
import icon180 from './apple-touch-icon-images/apple-touch-icon-180x180.png';
import icon57 from './apple-touch-icon-images/apple-touch-icon-57x57.png';
import icon72 from './apple-touch-icon-images/apple-touch-icon-72x72.png';
import icon76 from './apple-touch-icon-images/apple-touch-icon-76x76.png';

function appleTouchIconConfig(size, image) {
    return {
        ['rel']: 'apple-touch-icon',
        ['sizes']: `${size}x${size}`,
        ['href']: image,
    };
}

export default [
    appleTouchIconConfig(114, icon114),
    appleTouchIconConfig(120, icon120),
    appleTouchIconConfig(144, icon144),
    appleTouchIconConfig(180, icon180),
    appleTouchIconConfig(57, icon57),
    appleTouchIconConfig(72, icon72),
    appleTouchIconConfig(76, icon76),
];
