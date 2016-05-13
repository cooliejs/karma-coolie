define(function (require, exports, module) {
    /**
     * 方形的面积
     * @param width {Number} 宽
     * @param height {Number} 高
     * @returns {number}
     */
    exports.getArea = function (width, height) {
        return width * height;
    };


    /**
     * 方形的周长
     * @param width {Number} 宽
     * @param height {Number} 高
     * @returns {number}
     */
    exports.getCircumference = function (width, height) {
        return 2 * (width + height);
    };
});
