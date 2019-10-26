const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage();
  });

    it('should have a monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have monthlyPayment not equal 0 ', () => {
        expect(mortgage.monthlyPayment()).to.not.equal('0');
      });

    it('should not be able to be false', () => {
        expect(mortgage.monthlyPayment()).to.not.equal('false');
    });

    it('should have monthlyPayment not be undefined', () => {
        expect(mortgage.monthlyPayment()).to.not.be.undefined;
    })
});