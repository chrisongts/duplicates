describe('getDuplicate',function(){
  var arr1 = []
  var arr2 = [1, 2, 'string'];
  var arr3 = "abc";

  it('array is not empty', function(){
    expect(getDuplicates(arr1)).toBe(false);
  });

  it('is array contains string', function(){
    expect(getDuplicates(arr2)).toBe(false);
  });

    it('check for valid array', function(){
    expect(getDuplicates(arr3)).toBe(false);
  });

});
