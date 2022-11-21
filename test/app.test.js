const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const Cercle = require('../src/app').Cercle;
// const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. The side length of the Triangle', function(done) {
        let variables = new Triangle(3,3,3);
        expect(variables.getSideLength()).deep.to.equal([3,3,3]);
        done();
    });
    
    it('2. The surface area of the Triangle', function(done) {
        let Aire = new Triangle(4,4,4,4);
        expect(Aire.getSurfaceArea()).to.equal(8);
        done();
    });
    
    it('3. The volume of the Triange', function(done) {
        let c3 = new Cube(4,4,4,4,4);
        expect(c3.getVolume()).to.equal(64);
        done();
    });
    
});

    describe('Testing the Cercle Functions', function() {
        it('1. The side rayon of the Cercle', function(done) {
            let variables = new Cercle(3);
            expect(variables.getSideLength()).deep.to.equal(3);
            done();
        });
    
        it('2. The surface area of the Cercle', function(done) {
            let AireCercle = new Cercle(3);
            expect(AireCercle.getSurfaceArea()).to.equal(28.26);
            done();
        });
    
        it('3. The volume of the Cercle', function(done) {
            let volume = new Cercle(3);
            expect(volume.getVolume()).to.equal(113.04);
            done();
        });
    });