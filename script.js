


/* ========= 状態 ========= */

const checkedSet = new Set();
let currentCategory = null;

const categoryList = document.getElementById("categoryList");
const taskView = document.getElementById("taskView");
const taskList = document.getElementById("taskList");
const fixedHeader = document.getElementById("fixedHeader");
const headerTitle = document.getElementById("headerTitle");
const backBtn = document.getElementById("backBtn");
const chartToggle = document.getElementById("chartToggle");
const chart = document.getElementById("progressChart");

/* ========= localStorage ========= */

function loadChecked() {
  const data = JSON.parse(localStorage.getItem("checkedItems") || "[]");
  data.forEach(id => checkedSet.add(id));
}

function saveChecked() {
  localStorage.setItem("checkedItems", JSON.stringify([...checkedSet]));
}

/* ========= カテゴリ描画 ========= */

function renderCategories() {
  fixedHeader.hidden = true;
  taskView.hidden = true;
  categoryList.innerHTML = "";

  categories.forEach(cat => {
    const done = cat.items.filter(id => checkedSet.has(id)).length;

    const btn = document.createElement("button");
    btn.textContent = `${cat.name} ${done}/${cat.items.length}`;

    if (done === cat.items.length) {
      btn.classList.add("complete");
    }

    btn.onclick = () => openCategory(cat);
    categoryList.appendChild(btn);
  });
}

/* ========= カテゴリを開く ========= */

function openCategory(cat) {
  currentCategory = cat;
  categoryList.innerHTML = "";
  taskView.hidden = false;

  fixedHeader.hidden = false;
  headerTitle.textContent = cat.name;

  renderTasks();
}

/* ========= タスク描画 ========= */

function renderTasks() {
  taskList.innerHTML = "";

  currentCategory.items.forEach(id => {
    const task = tasks[id];

    const label = document.createElement("label");
    label.className = "task";

    if (task.mark) {
      label.classList.add(`mark-${task.mark}`);
    }

    label.innerHTML = `
      <input type="checkbox" data-id="${id}" ${checkedSet.has(id) ? "checked" : ""}>
      <span>${task.text}</span>
    `;

    taskList.appendChild(label);
  });
}

/* ========= チェック操作 ========= */

document.addEventListener("change", e => {
  if (!e.target.matches("input[type=checkbox]")) return;

  const id = e.target.dataset.id;

  if (e.target.checked) {
    checkedSet.add(id);
  } else {
    checkedSet.delete(id);
  }

  saveChecked();
});

/* ========= 戻る ========= */

backBtn.onclick = () => {
  renderCategories();
};

/* ========= 円グラフ ========= */

function drawPie(done, total) {
  const ctx = chart.getContext("2d");
  ctx.clearRect(0, 0, 300, 300);

  const angle = (done / total) * Math.PI * 2;

  ctx.fillStyle = "#4caf50";
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.arc(150, 150, 100, 0, angle);
  ctx.fill();

  ctx.fillStyle = "#eee";
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.arc(150, 150, 100, angle, Math.PI * 2);
  ctx.fill();
}

chartToggle.onclick = () => {
  chart.hidden = !chart.hidden;

  if (!chart.hidden) {
    let done = 0;
    let total = 0;

    categories.forEach(cat => {
      total += cat.items.length;
      done += cat.items.filter(id => checkedSet.has(id)).length;
    });

    drawPie(done, total);
  }
};

/* ========= 初期化 ========= */

loadChecked();
renderCategories();



  

