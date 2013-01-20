/*jshint globalstrict:true, es5:true, node:true */
'use strict';

/**
 * Collisions and levels
 * @constructor
 * @param {number} levelID
 * @param {Object} levelData
 */
function Level(levelID, levelData) {
    this.level = levelData[levelID];
    this.level.walls = this.decompress(this.level.walls);
    this.level.unreachables = this.decompress(this.level.unreachables);
}

module.exports = Level;

Level.prototype = {

    /**
     * Decompress level array
     * @param {Array.<number|Array>} arr
     * @return {Array.<number>}
     */
    decompress: function(arr) {
        var decompressed = [];
        for (var i = 0, m = arr.length; i < m; i++) {
            if (typeof arr[i] === 'number') {
                decompressed.push(arr[i]);
            } else {
                for (var ii = 0; ii <= arr[i][1]; ii++) {
                    decompressed.push(arr[i][0] + ii);
                }
            }
        }
        return decompressed;
    },

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isWall: function(x, y) {
        if (this.outOfBounds(x, y)) {
            return true;
        } else if (this.innerWall(x, y)) {
            return true;
        }
        return false;
    },

    /**
     * @param {number} playerID
     * @return {Array.<number>}
     */
    getSpawn: function(playerID) {
        var pos = this.level.spawns[playerID];
        return this.seqToXY(pos);
    },

    /**
     * @param {number} playerID
     * @return {number}
     */
    getSpawnDirection: function(playerID) {
        return this.level.directions[playerID];
    },

    /**
     * @param {Array.<Array>} locations
     * @return {Array.<number>}
     */
    getEmptyLocation: function(locations) {
        var m = this.level.width * this.level.height;
        while (true) {
            var location = this.seqToXY(Math.floor(Math.random() * m));
            if (this.isEmptyLocation(locations, location)) {
                return location;
            }
        }
    },

    /**
     * @param {Array.<Array>} locations
     * @param {Array.<number>} location
     * @return {boolean}
     */
    isEmptyLocation: function(locations, location) {
        if (this.isWall(location[0], location[1])) {
            return false;
        }
        if (this.isUnreachable(location[0], location[1])) {
            return false;
        }
        for (var i = 0, m = locations.length; i < m; i++) {
            var iloc = locations[i];
            if (iloc && iloc[0] === location[0] && iloc[1] === location[1]) {
                return false;
            }
        }
        return true;
    },

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    outOfBounds: function(x, y) {
        if (x < 0 || y < 0) {
            return true;
        } else {
            return x >= this.level.width || y >= this.level.height;
        }
    },

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    innerWall: function(x, y) {
        var seq = this.xyToSeq(x, y);
        return this.innerWallSeq(seq);
    },

    /**
     * @param {number} seq
     * @return {boolean}
     */
    innerWallSeq: function(seq) {
        var wall = this.level.walls;
        for (var i = 0, m = wall.length; i < m; i++) {
            if (seq === wall[i]) {
                return true;
            }
        }
        return false;
    },

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isUnreachable: function(x, y) {
        var unreachables = this.level.unreachables;
        for (var i = 0, m = unreachables.length; i < m; i++) {
            if (this.xyToSeq(x, y) === unreachables[i]) {
                return true;
            }
        }
        return false;
    },

    /**
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    xyToSeq: function(x, y) {
        return x + this.level.width * y;
    },

    /**
     * @param {number} seq
     * @return {Array.<number>}
     */
    seqToXY: function(seq) {
        return [
            seq % this.level.width,
            Math.floor(seq / this.level.width)
        ];
    }

};