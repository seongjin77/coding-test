function getBuyMethod(P, K)
{
  var count =  new Array(K);
  var result = 0;

  count.fill(0); // k명에게 몇개 주어야 하는지 배열을 만들었음. 지금 현재 k명에게 0개씩 배분

  for(var i = 0; i < P.length; i++) // 선물 배열의 길이만큼 하나씩 배분 !! 하나씩 배분할때
  {
    count[P[i]] += 1
  }

  for(var i = 0; i < K; i++)
  {
    if(count[i] >= 2)
    {
      result = (result + ((count[i] * (count[i] - 1)) / 2));
    }
  }

  return result;

}

function solution(A, K)
{
  var arr = new Array(A.length + 1);
  arr[0] = 0;

  for (var i = 1; i < A.length + 1 ; i++)
  {
    arr[i] = (arr[i - 1] + A[i - 1]) % K;
  }

  return getBuyMethod(arr, K);
}