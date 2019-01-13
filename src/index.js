import { PixelRatio, Dimensions } from 'react-native';

const _RESIZE_MODE = {
    LFIT: 'lfit',
    MFIT: 'mfit',
    FILL: 'fill',
    PAD: 'pad',
    FIXED: 'fixed',
};

export default {
    RESIZE_MODE: _RESIZE_MODE,
    getThumbnail: _getThumbnail,
    setDefSizeAvatarUrl: _setDefSizeAvatarUrl,
    getDefSizeAvatarUrl: _getDefSizeAvatarUrl,
};

function _getThumbnail(url, height, width = height, scaleType = _RESIZE_MODE.MFIT) {
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

function _setDefSizeAvatarUrl(size) {
    defSize = size;
}

function _getDefSizeAvatarUrl(url) {
    return _getThumbnail(url, defSize, defSize);
}