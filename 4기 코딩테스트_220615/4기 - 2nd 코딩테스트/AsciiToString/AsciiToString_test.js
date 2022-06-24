import assert from 'assert'
import solution from './AsciiToString.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [71, 111, 111, 103, 108, 101]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual('Google', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [65, 108, 71, 111, 82, 105, 116, 72, 109]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual('AlGoRitHm', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = []

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual('', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = [65]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual('A', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = [122]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual('z', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [119, 111, 114, 107]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual('work', result)
    done();
  });
})
