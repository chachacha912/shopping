# shopping

드림코딩 엘리 프론트엔드 강의   
쇼핑 목록앱 만들기 (강의 듣고 수정)   

혼자 만든 초기 버전은 my-shopping branch에 있습니다.

* __수정사항__
  + 전체삭제 기능추가
  + 긴 문장 입력시 칸 크기 조절
  + 이벤트 처리함수는 이름앞에 on 붙이기 (inputTolist > onAdd)
  + text 입력 안했을 때 return 처리는 가장 먼저 해주기
  + return한 후 커서 돌려놓기 .focus()
  + keypress 이벤트리스너 이용하기   
  HTML태그의 onkeypress="if( event.keyCode == 13 ){inputTolist();}" 수정
  (event)에 어떤 정보 있는지 개발자도구 디버깅으로 확인    
  event.key === "Enter" 사용    
  + 추가된 아이템으로 스크롤링 .scrollIntoView()

https://chachacha912.github.io/shopping/shopping.html

<img src='https://user-images.githubusercontent.com/67041124/96235979-67926f00-0fd6-11eb-962e-df3e46da90e2.JPG'>
