import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.BinaryNumber.BinaryNumber import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        n = 5

        # when
        result = solution(n)

        # then
        self.assertEqual('101', result)

    def test_2(self):
        # given
        n = 1

        # when
        result = solution(n)

        # then
        self.assertEqual('1', result)

    def test_3(self):
        # given
        n = 29284

        # when
        result = solution(n)

        # then
        self.assertEqual('111001001100100', result)

    def test_4(self):
        # given
        n = 9438293

        # when
        result = solution(n)

        # then
        self.assertEqual('100100000000010001010101', result)

    def test_5(self):
        # given
        n = 326

        # when
        result = solution(n)

        # then
        self.assertEqual('101000110', result)

    def test_6(self):
        # given
        n = 84237182

        # when
        result = solution(n)

        # then
        self.assertEqual('101000001010101101101111110', result)


if __name__ == '__main__':
    unittest.main()
