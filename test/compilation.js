/*jshint globalstrict:true, es5:true, node:true, sub:true*/
'use strict';

var assert = require('assert');
var gccClient = require(__dirname + '/../build/client.js');
var gccServer = require(__dirname + '/../build/server.js');

describe('XSSNAKE Compilation', function() {

    describe('Client', function() {
        var json;

        before(function(done) {
            this.timeout(10 * 3000); // Google Closure can be slow
            gccClient.compilePassJson(function(result) {
                json = result;
                done();
            });
        });

        it('produces compiled code', function() {
            assert(typeof json.compiledCode === 'string');
            assert(json.compiledCode.length > 1024);
        });

        it('does not produce errors', function() {
            assert(typeof json.errors === 'undefined');
        });

        it('does not produce warnings', function() {
            assert(typeof json.warnings === 'undefined');
        });

    });

    describe('Server', function() {
        var json;

        before(function(done) {
            this.timeout(10 * 1000);
            gccServer.compilePassJson(function(result) {
                json = result;
                done();
            });
        });

        it('produces compiled code', function() {
            assert(typeof json.compiledCode === 'string');
            assert(json.compiledCode.length > 1024);
        });

        it('does not produce errors', function() {
            assert(typeof json.errors === 'undefined');
        });

        it('does not produce warnings', function() {
            assert(typeof json.warnings === 'undefined');
        });

    });

});

