const stripComments = require('strip-json-comments');

module.exports = function stripJsonLoader(source) {
    this.cacheable();
    return stripComments(source);
};
