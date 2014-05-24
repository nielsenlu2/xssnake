'use strict';

/**
 * @param {number=} created Time server created the room. Required by Level
 *                          to sync client-server animations. Not required
 *                          for offline play.
 * @constructor
 */
xss.model.ClientGame = function(created) {
    this.offsetDelta = created ? this.getOffsetDelta(created) : 0;
    this.started = false;
};

xss.model.ClientGame.prototype = {

    getOffsetDelta: function(created) {
        var serverCreatedAsLocal = xss.socket.model.toLocalTime(created);
        return new Date() - serverCreatedAsLocal;
    }

};