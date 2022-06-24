import assert from 'assert'
import solution from './BinaryNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 5

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('101', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const n = 1

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('1', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const n = 29284

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('111001001100100', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 9438293

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('100100000000010001010101', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 326

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('101000110', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 84237182

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('101000001010101101101111110', result)
    done();
  });
})
