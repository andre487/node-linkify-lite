'use strict';

var urlPattern = /(?:https?:)?\/\/(?:(?:[\w-]+\.)+[\w/#@~.-]*)(?:\?(?:[\w&=.!,;$#%-]+)?)?/gi;

module.exports = function(text) {
    return (text || '').replace(urlPattern, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    });
};
