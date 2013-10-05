'use strict';

/**
 * Client xss.util extension
 */
xss.util.extend(xss.util, {

    /**
     * @param {string} str
     * @param {number=} duration
     * @param {boolean=} flash
     */
    instruct: function(str, duration, flash) {
        var shape, left = xss.WIDTH - xss.font.width(str) - 3;

        shape = xss.font.shape(
            str, left, xss.HEIGHT - 3 - xss.font.height(str), {invert: true}
        );
        shape.clearBBox = true;

        if (duration) {
            shape.lifetime(0, duration);
        }

        if (flash) {
            shape.flash();
        }

        xss.shapes.instruction = shape;
    },

    /**
     * @param {string} str
     * @param {Function=} callback
     */
    error: function(str, callback) {
        var exit, dialog, body;

        xss.util.hash();

        exit = function() {
            dialog.destruct();

            if (callback) {
                callback();
            }

            xss.flow.restart();
        };

        body = 'Press ' + xss.UC_ENTER_KEY + ' to continue';
        dialog = new xss.Dialog(str, body, {
            type: xss.Dialog.TYPE.ALERT,
            ok: exit
        });
    },

    /**
     * Simple wrapper for localStorage
     * @param {string} key
     * @param {*?} value
     * @return {*}
     */
    storage: function(key, value) {
        if (!localStorage || key === null) {
            return '';
        }
        switch (arguments.length) {
            case 0:
                return '';
            case 1:
                try {
                    return JSON.parse(localStorage.getItem(key));
                } catch(err) {
                    localStorage.removeItem(key);
                }
                return '';
            case 2:
                if (value === null) {
                    localStorage.removeItem(key);
                    return '';
                } else {
                    return localStorage.setItem(key, JSON.stringify(value));
                }
        }
    },

    /**
     * Simple wrapper for location.hash
     * @param {string?} key
     * @param {*?} value
     * @return {*}
     */
    hash: function(key, value) {
        var hash, arr, newhash = '', dict = {};

        hash = location.hash.substr(1);
        arr = hash.split(/[:;]/g);

        // Populate dict
        for (var i = 0, m = arr.length; i < m; i += 2) {
            dict[arr[i]] = arr[i + 1];
        }

        switch (arguments.length) {
            case 0: // Empty
                if (location.hash) {
                    try {
                        history.replaceState(null, '', location.pathname + location.search);
                    } catch(err) {
                        document.hash = '';
                    }
                }
                return;
            case 1: // Return value
                return dict[key] || '';
            case 2: // Set value
                dict[key] = value;
                for (var k in dict) {
                    if (dict.hasOwnProperty(k)) {
                        if (k && dict[k]) {
                            newhash += k + ':' + dict[k] + ';';
                        }
                    }
                }
                location.replace('#' + newhash.replace(/;$/, ''));
                return value;
        }
    },

    /**
     * @param {number} num
     * @param {string=} single
     * @param {string=} plural
     * @returns {string}
     */
    pluralize: function(num, single, plural) {
        return (num === 1) ? (single || '') : (plural || 's');
    },

    /**
     * @param {string} str
     * @param {...(string|number)} varArgs
     * @returns {string}
     */
    format: function(str, varArgs) {
        var args = arguments;
        return args[0].replace(/\{(\d+)\}/g, function(match, number) {
            return typeof args[number] !== 'undefined' ? args[number] : match;
        });
    }

});