'use strict';

var expect = require('chai').expect;
var app = require('../app/app');



describe('sortArray', function ()
{
    describe('input is a num array', function ()
    {
        it('should return true', function ()
        {
            expect(app.sortArray(([1,5,73,2]))).to.eql([1,2,5,73]);
        });
        it('should return true', function ()
        {
            expect(app.sortArray((Array(1,4.1,73,2)))).to.eql([1,2,4.1,73]);
        });
        it('should return true', function ()
        {
            expect(app.sortArray((Array(1,2)))).to.eql([1,2]);
        });

    });

    describe('input is NaN array', function ()
    {
        it('should return true', function ()
        {
            expect(app.sortArray(([1,'5',73,2]))).to.eql([ 1, 2, '5', 73 ]);
        });

        it('should return true', function ()
        {
            expect(app.sortArray([])).to.eql([]);
        });
    });

    describe('input is not a num array', function ()
    {

        it('should return false', function ()
        {
            expect(app.sortArray(1)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.sortArray('k')).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.sortArray('k','a')).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.sortArray(null)).to.eql(false);
        });
    });





});
