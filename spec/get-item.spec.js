
describe('getItem', () => {
  const actual = getItem(['a', 'b', 'c'], 0);
  const expected = 'a';

  it('takes 2 arguments, the arr and an index then it returns an array item according to the passed index', () => {
    expect(actual).to.equal(expected);
    const actual2 = getItem([1, 2, 3, 4], 1);
    const expected1 = 2;
    expect(actual2).to.equal(expected1)

    it('goes through the array again when passed index that is larger then the array', () => {
      const actual3 = getItem([1, 2, 3, 4], 0);
      const expected3 = 1;
      expect(actual3).to.equal(expected3)
    });
  });
});


module.exports = getItem;
