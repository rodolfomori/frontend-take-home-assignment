import { currencyFormatter } from '../../src/utils';

describe('Currency formatter tests', function() {
  it('format value $1,000', () => {
    const formatedValue = currencyFormatter(1000);
    expect(formatedValue).toEqual('$1,000');
  });

  it('format value $25,000', () => {
    const formatedValue = currencyFormatter(25000);
    expect(formatedValue).toEqual('$25,000');
  });
});
