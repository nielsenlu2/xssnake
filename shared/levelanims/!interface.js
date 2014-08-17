'use strict';

/**
 * @interface
 * @param {number=} seed
 */
xss.levelanims.Interface = function(seed) {};
xss.levelanims.Interface.prototype = {

    /**
     * Return one or more {xss.PixelCollection}'s.
     * Return null if animation was not updated.
     * @param {number} ms
     * @param {boolean} preGame
     * @return {xss.ShapeCollection}
     */
    update: function(ms, preGame) {
        return null;
    }

};
