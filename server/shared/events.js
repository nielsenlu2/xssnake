/*jshint globalstrict:true, es5:true, node:true, sub:true*/
/*globals XSS*/
'use strict';

// Event keys are hard-coded and unique.
module.exports = {

    CLIENT_APPLE_HIT     : 'CA1',
    CLIENT_APPLE_SPAWN   : 'CA2',

    CLIENT_CHAT_NOTICE   : 'CC1',
    CLIENT_CHAT_MESSAGE  : 'CC2',
    CLIENT_CONNECT       : 'CC3',
    CLIENT_COMBI_EVENTS  : 'CC4',

    CLIENT_GAME_COUNTDOWN: 'CG1',
    CLIENT_GAME_START    : 'CG2',
    CLIENT_GAME_SNAKES   : 'CG3',

    CLIENT_PING          : 'CP1',
    CLIENT_POWERUP_HIT   : 'CP2',
    CLIENT_POWERUP_SPAWN : 'CP3',

    CLIENT_ROOM_JOIN     : 'CR1',
    CLIENT_ROOM_INDEX    : 'CR2',
    CLIENT_ROOM_SCORE    : 'CR3',
    CLIENT_ROOM_STATUS   : 'CR4',

    CLIENT_SNAKE_ACTION  : 'CS1',
    CLIENT_SNAKE_CRASH   : 'CS2',
    CLIENT_SNAKE_SIZE    : 'CS3',
    CLIENT_SNAKE_SPEED   : 'CS4',
    CLIENT_SNAKE_UPDATE  : 'CS5',

    SERVER_PING          : 'SP1',

    SERVER_ROOM_STATUS   : 'SR1',
    SERVER_ROOM_JOIN     : 'SR2',
    SERVER_ROOM_MATCH    : 'SR3',
    SERVER_ROOM_START    : 'SR4',

    SERVER_CHAT_MESSAGE  : 'SC1',

    SERVER_SNAKE_UPDATE  : 'SS1',

    SERVER_GAME_STATE    : 'SG1'
};

if (typeof XSS !== 'undefined') {
    XSS.events = module.exports;
}