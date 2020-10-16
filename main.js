const content = document.querySelector(".content");
const item = document.querySelector("input");
const addBt = document.querySelector(".addBt");

// input의 값을 li행으로 추가하기
function inputTolist() {
  const addItem = document.createElement("li");
  addItem.innerHTML = `<span>${item.value}</span><i class="fas fa-trash-alt"></i>`;
  if (item.value != "") {
    content.appendChild(addItem);
  }
  item.value = "";
}

// +버튼을 누르거나 enter버튼을 눌렀을 때
addBt.addEventListener("click", inputTolist);

// 휴지통 아이콘을 클릭하면 삭제하기
content.addEventListener("click", function (e) {
  if (e.target.classList.contains("fas")) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});
