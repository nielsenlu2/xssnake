/*jshint globalstrict:true, es5:true, sub:true*/
/*globals XSS, Game, Shape, Util*/
'use strict';

/**
 * Powerup
 * @param {number} index
 * @param {number} x
 * @param {number} y
 * @constructor
 */
function Powerup(index, x, y) {
    this.index = index;
    this.x = x * XSS.GAME_TILE + -1 + XSS.GAME_LEFT;
    this.y = y * XSS.GAME_TILE + -1 + XSS.GAME_TOP;
    this._shapeName = 'P' + index;
    XSS.shapes[this._shapeName] = this._getShape();
}

Powerup.prototype = {

    destruct: function() {
        delete XSS.shapes[this._shapeName];
    },

    /**
     * @return {Shape}
     * @private
     */
    _getShape: function() {
        var shape = XSS.font.shape(XSS.UNICODE_ELECTRIC, this.x, this.y);
        shape.clear = true;
        return shape;
    }

};