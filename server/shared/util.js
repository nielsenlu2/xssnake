/*jshint globalstrict:true, es5:true, node:true, sub:true*/
'use strict';

var Util = {

    /**
     * @param {*} destination
     * @param {*} source
     * @return {*}
     */
    extend: function(destination, source) {
        for (var property in source) {
            if (source.hasOwnProperty(property)) {
                destination[property] = source[property];
            }
        }
        return destination;
    },

    /**
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    randomBetween: function(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    },

    /**
     * @param {Array} arr
     * @return {*}
     */
    randomItem: function(arr) {
        return arr[Util.randomBetween(0, arr.length - 1)];
    },

    /**
     * @return {string}
     */
    randomStr: function() {
        return Math.random().toString(36).substring(2, 5);
    },

    /**
     * @param {Array.<number>} a
     * @param {Array.<number>} b
     * @return {number}
     */
    delta: function(a, b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    },

    /**
     * @param {Array.<number>} a
     * @param {Array.<number>} b
     * @return {boolean}
     */
    eq: function(a, b) {
        return a[0] === b[0] && a[1] === b[1];
    },

    /**
     * @param {*} obj
     * @param {*} val
     * @return {?string}
     */
    getKey: function(obj, val) {
        for (var k in obj) {
            if (obj.hasOwnProperty(k) && val === obj[k]) {
                return k;
            }
        }
        return null;
    }

};

module.exports = Util;