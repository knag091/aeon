const DDay = document.querySelector("#DDay");

function find_day() {
  const christmas = new Date("2025-09-06"); //디데이 설정
  const today = new Date(); //밀리세컨드 단위의 시간 표시 1초=1000

  day_gap = christmas - today; //크리스마스까지 남은 밀리세컨드 초 값

  const day = Math.floor(day_gap / (1000 * 60 * 60 * 24)); //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
  const hour = Math.floor((day_gap / (1000 * 60 * 60)) % 24);
  const min = Math.floor((day_gap / (1000 * 60)) % 60);
  const sec = Math.floor((day_gap / 1000) % 60);

  DDay.innerText = `${day}일 ${hour}시간 ${min}분 ${sec}초`;
}
find_day();
setInterval(find_day, 1000); //초마다 디데이 기능 실행

// ------------------------------------
const myTextarea = document.querySelector(".container-member .pay .account");

// button 클릭 이벤트
myTextarea.onclick = () => {
  // // textarea의 내용을 복사한다.
  // window.navigator.clipboard.writeText(myTextarea.value).then(() => {
  //   // 복사가 완료되면 호출된다.
  //   alert("복사완료");
  // });
  
  const text = "1001-8451-8498";
  
  navigator.clipboard.writeText(text).then(() => {
    alert(`계좌번호 복사가 완료되었습니다.`);
  }).catch(err => {
    alert('복사 실패: ' + err);
  });
};
