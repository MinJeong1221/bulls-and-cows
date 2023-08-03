export function generaterRandomNumber() {
  //1 ~ 9까지 숫자를 이용
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const pickNum = shuffle(candidates).splice(0, 4);
  return pickNum;
}

function shuffle(array) {
  return array.sort(() => {
    //음수반환 내림차순 정렬 / 양수반환 오름차순 정렬
    return Math.random() - 0.5; // -0.5 ~ 0.5 (원래 0~1 사이 숫자를 랜덤하게 뽑아줌)
  });
}
