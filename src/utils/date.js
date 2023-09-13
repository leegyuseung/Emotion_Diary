// 오늘 날짜를 형식을 바꿔주기 위함
export const getStringDate = (date) => {
  // ISO형식의 문자열을 반환하는 함수 toISOString()
  return date.toISOString().slice(0, 10);
};
