/* =========================
   データ定義
========================= */

// カテゴリ定義（※項目IDだけ管理）
const categories = {
  basic: {
    name: "基礎",
    items: ["task_001", "task_002", "task_003"]
  },
  advanced: {
    name: "応用",
    items: ["task_101", "task_102"]
  }
};

// タスク定義（※表示文言＋色フラグ）
const tasks = {
  task_001: { text: "環境構築を完了", mark: "important" },
  task_002: { text: "基本操作を確認", mark: null },
  task_003: { text: "必須設定を確認", mark: "warning" },
  task_101: { text: "応用課題を理解", mark: null },
  task_102: { text: "最適化を試す", mark: "important" }
};

/* =========================
   状態
========================= */

const checkedSet = new Set();   // チェック済みID
let currentCategory = null;    // 選択中カテゴリ

/* =========================
   localStorage
========================= */

function saveChecked() {
  localStorage.setItem("checked", JSON.stringify([...checkedSet]));
}

function loadChecked() {
  const saved = JSON.parse(localStorage.getItem("checked") || "[]");
  saved.forEach(id => checkedSet.add(id));
}

/* =========================
   カテゴリ画面
========================= */

function renderCategories() {
  document.getElementById("header").textContent = "カテゴリ選択";
  document.getElementById("taskView").hidden = true;

  const root = document.getElementById("categoryList");
  root.innerHTML = "";

  for (const key in categories) {
    const { name, items } = categories[key];
    const done = items.filter(id => checkedSet.has(id)).length;

    const btn = document.createElement("button");
    btn.textContent = `${name} ${done}/${items.length}`;

    // 全達成で色変更
    if (done === items.length) {
      btn.classList.add("complete");
    }

    btn.onclick = () => openCategory(key);
    root.appendChild(btn);
  }
}

/* =========================
   カテゴリを開く
========================= */

function openCategory(key) {
  currentCategory = key;

  document.getElementById("categoryList").innerHTML = "";
  document.getElementById("taskView").hidden = false;
  document.getElementById("currentCategory").textContent =
    categories[key].name;

  renderTasks();
}

/* =========================
   タスク描画
========================= */

function renderTasks() {
  const root = document.getElementById("taskList");
  root.innerHTML = "";

  categories[currentCategory].items.forEach(id => {
    const task = tasks[id];

    const label = document.createElement("label");
    label.className = "task";

    // 特定項目のみ最初から色付け
    if (task.mark) {
      label.classList.add(`mark-${task.mark}`);
    }

    label.innerHTML = `
      <input type="checkbox" data-id="${id}"
        ${checkedSet.has(id) ? "checked" : ""}>
      <span>${task.text}</span>
    `;

    root.appendChild(label);
  });
}

/* =========================
   チェック操作
========================= */

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

/* =========================
   戻るボタン
========================= */

document.getElementById("backBtn").onclick = () => {
  renderCategories();
};

/* =========================
   初期化
========================= */

loadChecked();
renderCategories();
