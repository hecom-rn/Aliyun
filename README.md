# Aliyun

[![npm version](https://img.shields.io/npm/v/@hecom/aliyun.svg?style=flat)](https://www.npmjs.com/package/@hecom/aliyun)

这是阿里云相关工具的集合。

**接口**：

* `RESIZE_MODE: object`：图片压缩模式。
* `getThumbnail(url, height, width, scaleType) => string`：将一个阿里云图片链接加上宽高和压缩模式，返回新的链接。
* `setDefSizeAvatarUrl: (size) => void`：设置头像压缩大小。
* `getDefSizeAvatarUrl: (url) => string`：使用头像压缩大小，获取压缩后的图片链接。