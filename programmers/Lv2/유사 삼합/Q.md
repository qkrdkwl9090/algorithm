## 문제

중복된 수가 허용되는 정수로 이루어진 배열 `arr`가 있다. 이 배열에서 중복되지 않게 `3`개의 수를 골라 더해서, 정수 `target`과 가장 가까운 숫자를 만들고자 한다. 이 때, 만들 수 있는 가장 가까운 숫자를 출력하시오.

단, `target`과 거리가 같은 숫자를 2개 만들 수 있을 경우 더 작은 숫자를 반환하시오.

## 입력 설명

- `3 <= arr.length <= 10000`
- `10000 <= target <= 10000`

## 출력 설명

직사각형의 넓이를 정수로 반환

## 입력 예시

`arr = {5, 2, 15, 3, 10, 12}`

`target = 21`

## 출력 예시

`20`

## 예시입출력 설명

`21`은 세 가지 숫자를 더해서 만들 수 없으나,

`2 + 15 + 3 = 20`, `5 + 2 + 15 = 22` 두 가지는 모두 만들 수 있다.

문제의 조건에 의해 더 작은 숫자인 `20`을 출력한다
