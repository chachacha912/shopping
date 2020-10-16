const content = document.querySelector(".content");
const item = document.querySelector("input");
const addBt = document.querySelector(".addBt");
const delAllBt = document.querySelector(".delete_all");

// input의 값을 li행으로 추가하기
function inputTolist() {
  const addItem = document.createElement("li");
  addItem.innerHTML = `<span class="item_name">${item.value}</span></i><i class="fas fa-minus-circle"></i>`;
  if (item.value != "") {
    content.appendChild(addItem);
  }
  item.value = "";
}

// +버튼을 누르거나 enter버튼을 눌렀을 때
addBt.addEventListener("click", inputTolist);

// -버튼을 클릭하면 삭제하기
content.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-minus-circle")) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});

// 휴지통 아이콘을 클릭하면 전체 삭제하기
delAllBt.addEventListener("click", function(){
  content.innerHTML="";
})