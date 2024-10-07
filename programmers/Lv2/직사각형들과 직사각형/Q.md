## 문제

직사각형을 연속적으로 배열한 그래프가 있다.

이 그래프에 있는 직사각형들은 너비가 일정하게 `1`이고, 높이가 배열 `heights`에 `0`이상의 정수 값으로 주어진다.

예를 들어 `heights = {5, 2, 1, 3, 4, 2, 5}`로 주어진 경우 그래프는 아래와 같이 나타낼 수 있다.

!https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/1997f04d-9b69-4811-bcab-240bea5bb206/img1.png

이 그래프 내부에 가장 큰 직사각형을 그리려고 한다. 이 직사각형의 밑변은 그래프의 밑변과 맞닿아 있어야 한다.

예를 들어 위 그래프에 그릴 수 있는 가장 큰 직사각형은 아래와 같이 나타나며, 이 때 이 직사각형의 넓이는 `8`이다.

!https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/c4dceaac-7c40-4320-92ad-bdfc1b34d817/img2.png

위와 같이 주어진 `heights`에 대해 내부에 그릴 수 있는 가장 큰 직사각형의 넓이를 구하시오.

## 입력 설명

`0 < heights.length <= 10000`

`0 <= heights[i] <= 10000`

## 출력 설명

직사각형의 넓이를 정수로 반환

## 입력 예시

`{5, 2, 1, 3, 4, 2, 5}`

## 출력 예시

`8`
