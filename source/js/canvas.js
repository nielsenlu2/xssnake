/*jshint globalstrict:true, es5:true, sub:true*/
/*globals XSS, BoundingBox*/
'use strict';

/**
 * Canvas drawing
 * @constructor
 */
function Canvas() {
    this.canvas = this._setupCanvas();
    this.ctx = this.canvas.getContext('2d');

    this.setTheme(XSS.themes[XSS.util.storage('theme') || 0]);
    this._setCanvasDimensions();

    if (!window.requestAnimationFrame) {
        this._useVendorRequestAnimationFrame();
    }

    this.focus = true;
    this._positionCanvas();
    this._bindEvents();

    this._prevFrame = new Date() - 20;
    this._dummyBBox = new BoundingBox();
    this._frameBound = this._frame.bind(this);

    window.requestAnimationFrame(this._frameBound, this.canvas);
}

Canvas.prototype = {

    /**
     * @param {number} theme
     */
    setTheme: function(theme) {
        this.theme = theme;
        this._clearShapeCache();
        this._setBackgroundPattern();
    },

    /**
     * @param {number} delta
     */
    paint: function(delta) {
        // Abuse this loop to trigger game tick
        XSS.pubsub.publish(XSS.PUB_GAME_TICK, delta, this.focus);

        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // Paint all layers
        this._paint(delta, XSS.shapes);
    },

    /**
     * Remove all nulled shapes. We don't delete shapes immediately
     * because this triggers a slow garbage collection during gameplay,
     * which may affect fps negatively.
     */
    garbageCollect: function() {
        var shapes = XSS.shapes;
        for (var k in shapes) {
            if (shapes.hasOwnProperty(k) && null === shapes[k]) {
                delete shapes[k];
            }
        }
    },

    /**
     * @param {number} delta
     * @param {*} shapes
     * @private
     */
    _paint: function(delta, shapes) {
        var k, overlays = {};
        for (k in shapes) {
            if (shapes.hasOwnProperty(k) && null !== shapes[k]) {
                if (shapes[k].clearBBox) {
                    overlays[k] = shapes[k];
                } else {
                    this._paintShapeDispatch(k, shapes[k], delta);
                }
            }
        }

        // Overlays are painted at a later time
        for (k in overlays) {
            if (overlays.hasOwnProperty(k)) {
                this._paintShapeDispatch(k, overlays[k], delta);
            }
        }
    },

    /** @private */
    _frame: function(now) {
        var delta;

        // Make appointment for next paint. Quit on error.
        if (!XSS.error) {
            window.requestAnimationFrame(this._frameBound, this.canvas);
        }

        // Time since last paint
        delta = now - this._prevFrame;
        this._prevFrame = now;

        // Show FPS in title bar
        // var fps = Math.round(1000 / delta);
        // document.title = 'XXSNAKE ' + fps;

        this.paint(delta);
    },

    /**
     * @param {Object} context
     * @param {Shape} shape
     * @param {BoundingBox} bbox
     */
    _paintShape: function(context, shape, bbox) {
        var pixels = shape.pixels;
        context.fillStyle = this.theme.on;
        for (var i = 0, m = pixels.length; i < m; i++) {
            this._drawPixel(context, pixels[i], bbox.x1, bbox.y1, shape.clearPx);
        }
    },

    /**
     * @param {Object} context
     * @param {XSS.ShapePixel} pixel
     * @param {number} offsetX
     * @param {number} offsetY
     * @param {boolean} clear
     * @suppress {checkTypes}
     * @private
     */
    _drawPixel: function(context, pixel, offsetX, offsetY, clear) {
        var pixelSize = this.pixelSize,
            tileSize = this.tileSize;
        offsetX = pixel[0] * tileSize - offsetX;
        offsetY = pixel[1] * tileSize - offsetY;
        if (clear) {
            context.clearRect(offsetX, offsetY, pixelSize, pixelSize);
        }
        context.fillRect(offsetX, offsetY, pixelSize, pixelSize);
    },

    /**
     * @param {string} name
     * @param {Shape} shape
     * @param {number} delta
     * @private
     */
    _paintShapeDispatch: function(name, shape, delta) {
        var bbox, cache, ctx = this.ctx;

        // Apply effects
        for (var k in shape.effects) {
            if (shape.effects.hasOwnProperty(k)) {
                shape.effects[k].call(shape, delta);
            }
        }

        // Draw on canvas if shape is enabled and visible
        if (false === shape.enabled) {
            return;
        }

        // Clear surface below shape
        if (shape.clearBBox) {
            bbox = shape.bbox();
            ctx.clearRect(bbox.x1, bbox.y1, bbox.width, bbox.height);
        }

        // Paint shape without caching
        if (shape.clearPx) {
            this._paintShape(ctx, shape, this._dummyBBox);
        }

        // Create cache and paint
        else {
            cache = shape.cache || (shape.cache = this._getPaintedShape(shape));
            ctx.drawImage(cache.canvas, cache.bbox.x1, cache.bbox.y1);
        }
    },

    /**
     * @param {Shape} shape
     * @return {XSS.ShapeCache}
     * @private
     */
    _getPaintedShape: function(shape) {
        var bbox, canvas;

        bbox = this._getBBoxRealPixels(shape);

        canvas = document.createElement('canvas');
        canvas.width  = bbox.width;
        canvas.height = bbox.height;

        this._paintShape(canvas.getContext('2d'), shape, bbox);

        return {canvas: canvas, bbox: bbox};
    },

    /**
     * @return {number}
     * @private
     */
    _getTileSize: function() {
        return Math.floor(Math.min(
            window.innerWidth / XSS.PIXELS_H,
            window.innerHeight / XSS.PIXELS_V
        )) || 1;
    },

    /** @private */
    _useVendorRequestAnimationFrame: function() {
        window['requestAnimationFrame'] =
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                setTimeout(callback, 1000 / 60);
            };
    },

    /** @private */
    _bindEvents: function() {
        window.onresize = this._positionCanvas.bind(this);
        window.onfocus  = this._handleFocusChange.bind(this);
        window.onblur   = this._handleFocusChange.bind(this);
        window.onclick  = this._promoteKeyboard.bind(this);
    },

    /**
     * @param {Event} ev
     * @private
     */
    _handleFocusChange: function(ev) {
        this.focus = (ev.type === 'blur');
        XSS.pubsub.publish(XSS.PUB_FOCUS_CHANGE, this.focus);
    },

    /**
     * @param {Event} ev
     * @private
     */
    _promoteKeyboard: function(ev) {
        if (Number(ev.which) !== 1) { // Only LMB
            return;
        }
        var keys = [
            'Esc',
            XSS.UC_ENTER_KEY,
            XSS.UC_ARR_LEFT,
            XSS.UC_ARR_UP,
            XSS.UC_ARR_RIGHT,
            XSS.UC_ARR_DOWN
        ];
        XSS.util.instruct(
            'HUH?! Use the electronic typing device:  ' + keys.join(' / '),
            4000
        );
    },

    /**
     * @private
     */
    _clearShapeCache: function() {
        var shapes = XSS.shapes;
        for (var k in shapes) {
            if (shapes.hasOwnProperty(k) && null !== shapes[k]) {
                shapes[k].uncache();
            }
        }
    },

    /** @private */
    _setCanvasDimensions: function() {
        this.tileSize = this._getTileSize();

        // Attempt to make fat pixels pleasing at all sizes
        if (this.tileSize >= 5) {
            this.pixelSize = this.tileSize - 1;
        } else if (this.tileSize === 1) {
            this.pixelSize = 1;
        } else {
            this.pixelSize = this.tileSize - 0.6;
        }

        this.canvasWidth = this.tileSize * XSS.PIXELS_H;
        this.canvasHeight = this.tileSize * XSS.PIXELS_V;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;

        this._setBackgroundPattern();
    },

    /** @private */
    _positionCanvas: function() {
        var windowCenter, windowMiddle, left, top, style;

        this._setCanvasDimensions();
        this._clearShapeCache();

        windowCenter = window.innerWidth / 2;
        windowMiddle = window.innerHeight / 2;

        left = this._snapToFatPixels(windowCenter - (this.canvasWidth / 2));
        top = this._snapToFatPixels(windowMiddle - (this.canvasHeight / 2));

        style = this.canvas.style;
        style.position = 'absolute';
        style.left = Math.max(0, left) + 'px';
        style.top = Math.max(0, top) + 'px';
    },

    /** @private */
    _setBackgroundPattern: function() {
        var canvas, context, pixelSize, rectSize, bgImage;

        pixelSize = Math.max(this.tileSize, 2);
        rectSize = pixelSize - 1;

        canvas = document.createElement('canvas');
        canvas.width  = pixelSize;
        canvas.height = pixelSize;

        context = canvas.getContext('2d');
        context.fillStyle = this.theme.off;
        context.fillRect(0, 0, rectSize, rectSize);

        bgImage = ' url(' + canvas.toDataURL('image/png') + ')';
        XSS.doc.style.background = this.theme.bg + bgImage;
    },

    /**
     * @return {Element}
     * @private
     */
    _setupCanvas: function() {
        var canvas = document.createElement('canvas');
        XSS.doc.appendChild(canvas);
        return canvas;
    },

    /**
     * @param {Shape} shape
     * @return {BoundingBox}
     * @private
     */
    _getBBoxRealPixels: function(shape) {
        var bbox = shape.bbox();
        for (var k in bbox) {
            if (bbox.hasOwnProperty(k)) {
                bbox[k] *= this.tileSize;
            }
        }
        return bbox;
    },

    /**
     * @param {number} num
     * @return {number}
     * @private
     */
    _snapToFatPixels: function(num) {
        return Math.floor(num / this.tileSize) * this.tileSize;
    }

};