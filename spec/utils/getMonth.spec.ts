import { getMonthName } from '../../src/utils';

describe('get month basic tests', function() {
  it('should return correct month', () => {
    const month = getMonthName(1);
    expect(month).toEqual('February');
  });

  it('should return correct month', () => {
    const month = getMonthName(11);
    expect(month).toEqual('December');
  });
});
