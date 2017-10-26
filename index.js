var postcss = require('postcss');

var noPatternOptionErrorMessage =
    '"pattern" option is required, but none was provided';
var invalidPatternErrorMessage =
    'provided pattern is not valid regexp expression';

function throwErrorWithMessage(res, message) {
    return res.messages.push({
        type: 'error',
        plugin: 'postcss-filter-imports',
        text: message
    });
}

module.exports = postcss.plugin('postcss-filter-imports', function (opts) {
    opts = opts || {};

    return function (root, result) {
        var regExp;

        if (!opts.pattern) {
            return throwErrorWithMessage(result, noPatternOptionErrorMessage);
        }
        try {
            regExp = new RegExp(opts.pattern);
        } catch (e) {
            return throwErrorWithMessage(result, invalidPatternErrorMessage);
        }

        root.walkAtRules('import', function (atRule) {
            if (atRule.params.match(regExp)) {
                atRule.remove();
                if (opts.verbose) {
                    result.messages.push({
                        type: 'error',
                        plugin: 'postcss-filter-imports',
                        text: 'Removed: @import ' +
                        atRule.params + 'on line' +
                        atRule.source.start.line || ''
                    });
                }
            }
        });

        return result;
    };
});

