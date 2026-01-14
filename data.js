// カテゴリ定義（自分で管理する前提）
console.log("DATA VERSION: 15 categories");

// ===== カテゴリ定義 =====
const categories = [
  { id: "cat01", name: "カントー地方", items: ["task_001","task_002","task_003"] },
  { id: "cat02", name: "ジョウト地方", items: ["task_101","task_102"] },
  { id: "cat03", name: "ホウエン地方", items: ["task_201","task_202"] },
  { id: "cat04", name: "シンオウ地方", items: ["task_301","task_302"] },
  { id: "cat05", name: "イッシュ地方", items: ["task_401"] },
  { id: "cat06", name: "カロス地方", items: ["task_501"] },
  { id: "cat07", name: "アローラ地方", items: ["task_601"] },
  { id: "cat08", name: "ガラル地方", items: ["task_701"] },
  { id: "cat09", name: "ヨロイ島", items: ["task_801"] },
  { id: "cat10", name: "カンムリの雪原", items: ["task_901"] },
  { id: "cat11", name: "ヒスイ地方", items: ["task_1001"] },
  { id: "cat12", name: "パルデア地方", items: ["task_1101"] },
  { id: "cat13", name: "キタカミの里", items: ["task_1201"] },
  { id: "cat14", name: "ブルーベリー学園", items: ["task_1301"] },
  { id: "cat15", name: "未発見", items: ["task_1401"] }
];


// タスク定義（増えてもここだけ触る）
const tasks = {
  task_001: { text: "環境構築", mark: "important" },
  task_002: { text: "基本操作", mark: null },
  task_003: { text: "必須設定", mark: "warning" },
  task_101: { text: "応用理解", mark: null },
  task_102: { text: "最適化", mark: "important" }
};
