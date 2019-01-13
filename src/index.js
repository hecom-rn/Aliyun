import { PixelRatio, Dimensions } from 'react-native';

export const RESIZE_MODE = {
    LFIT: 'lfit',
    MFIT: 'mfit',
    FILL: 'fill',
    PAD: 'pad',
    FIXED: 'fixed',
};

export function getThumbnail(url, height, width = height, scaleType = RESIZE_MODE.MFIT) {
    if (typeof url === 'undefined') {
        return undefined;
    }
    if (url.indexOf('?x-oss-process=image/resize') !== -1) {
        return url;
    }
    if (typeof height === 'undefined' && typeof width === 'undefined') {
        width = Dimensions.get('window').width;
        height = Dimensions.get('window').height;
    }
    if (typeof width === 'undefined') {
        width = height;
    }
    const pixelHeight = PixelRatio.getPixelSizeForLayoutSize(height);
    const pixelWidth = PixelRatio.getPixelSizeForLayoutSize(width);
    return url + '?x-oss-process=image/resize,m_' + scaleType + ',h_' + pixelHeight + ',w_' + pixelWidth;
}

let defSize = 32;

export function setDefSizeAvatarUrl(size) {
    defSize = size;
}

export function getDefSizeAvatarUrl(url) {
    return getThumbnail(url, defSize, defSize);
}