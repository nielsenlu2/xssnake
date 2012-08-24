/*jshint globalstrict:true,es5:true*/
'use strict';

var fs = require('fs'),
    util = require('util'),
    LevelImage = require('./levels/level_image.js');

var levelTplFile = __dirname + '/../shared/levels.tpl';
var jsOutputFile = __dirname + '/../shared/levels.js';
var levelImagesDir = __dirname + '/../data/level_images/';

var files = fs.readdirSync(levelImagesDir);

var levels = [];
var done = 0;
var total = 0;

for (var i = 0, m = files.length; i < m; i++) {
    if (/\.png$/.test(files[i])) {
        setlevel(levelImagesDir + files[i], i);
        total++;
    }
}

function whiteSpaceOCD(str) {
    str = str.replace(/\s+/g, ' '); // Normalize whitespace
    str = str.replace(/([\[\{]) /g, '$1'); // No spaces following opening bracket
    str = str.replace(/ ([\]\}])/g, '$1'); // No spaces before closing bracket
    str = str.replace(/\{/g, '\n        ' + '{'); // Start each level on a new line
    str = str.replace(/\]$/g, '\n    ' + ']'); // Closing bracket on new line
    return str;
}

function setlevel(file, index) {
    void(new LevelImage(file, function(data) {
        var template, levelsStr;
        levels[index] = data;

        // Got all levels, write to file
        if (++done === total) {

            // levelsStr = toSrc(levels, 99);
            levelsStr = util.inspect(levels, false, 99, false);
            levelsStr = whiteSpaceOCD(levelsStr);

            template = fs.readFileSync(levelTplFile, 'utf-8');
            template = template.replace('%LEVELS%', levelsStr);
            template = template.replace('%DATE%', new Date().toUTCString());

            fs.writeFile(jsOutputFile, template);
        }
    }));
}