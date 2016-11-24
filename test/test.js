'use strict';
const combinations = require('..');

describe('Compute combinations', function () {
    it('should generate 1 of N combinations (index mode)', function () {
        var options = {mode: 'index'};
        Array.from(combinations(1, 8, options)).should.eql([[7], [0], [1], [2], [3], [4], [5], [6]]);
        Array.from(combinations(1, 1)).should.eql([[0]]);
        Array.from(combinations(1, 2)).should.eql([[1], [0]]);
    });

    it('should generate 1 of N combinations (mask mode)', function () {
        var options = {mode: 'mask'};
        Array.from(combinations(1, 1, options)).should.eql([[1]]);
        Array.from(combinations(1, 2, options)).should.eql([[0, 1], [1, 0]]);
    });

    it('Invalid mode should throw', function () {
        var options = {mode: 'invalid'};
        (function () {
            combinations(1, 10, options).next();
        }).should.throw(/Invalid mode/);
    });

    it('should generate some more complicated comibinations', function () {
        Array.from(combinations(2, 3)).should.eql([[1, 2], [0, 2], [0, 1]]);
        Array.from(combinations(2, 4)).should.eql([[2, 3], [0, 3], [1, 3], [1, 2], [0, 2], [0, 1]]);
    });
});
