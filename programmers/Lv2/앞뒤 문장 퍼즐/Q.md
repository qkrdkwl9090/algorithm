## 문제

문장의 일부인 구문을 모아둔 배열 `phrases`가 주어졌다.

이 구문에서 앞뒤 문장 퍼즐을 풀어 문장을 생성하려 한다.

앞뒤 문장 퍼즐은 아래와 같이 풀 수 있다.

- 앞 구문과 뒷 구문을 골라 하나의 문장을 생성한다.
- 앞 구문의 마지막 단어와 뒷 구문의 첫 단어는 동일하다.
- 문장/구문 내에서 각 단어는 공백 (`' '`)으로 구분된다.
- 두 구문을 합쳐 문장을 구성할 때, 겹치는 단어는 한번만 쓴다.

예를 들어, 두 구문 `"zerobase is"`, `"is the greatest platform"`를 결합하면

`"zerobase is the greatest platform"`

이라는 문장을 만들 수 있다.

한 단어로 이루어진 구문은 해당 단어가 첫 단어이면서 마지막 단어이기도 하다.

주어진 구문을 조합하여 만들 수 있는 모든 문장을 사전식 배열 순서로 출력하시오.

## 입력설명

- `0 < phrase.length <= 100`
- `0 < phrase[i].length <= 100`

## 출력설명

문장을 문자열 배열로 반환

## 매개변수 형식

`phrases = {"zerobase is", "is the greatest platform"}`

## 반환값 형식

`"zerobase is the greatest platform"`
