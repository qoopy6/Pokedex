// カテゴリ定義（自分で管理する前提）
// ===== カテゴリ定義 =====
const categories = [
  { id: "cat01", name: "基礎", items: ["task_001","task_002","task_003"] },
  { id: "cat02", name: "応用", items: ["task_101","task_102"] },
  { id: "cat03", name: "設計", items: ["task_201","task_202"] },
  { id: "cat04", name: "UI", items: ["task_301","task_302"] },
  { id: "cat05", name: "UX", items: ["task_401"] },
  { id: "cat06", name: "最適化", items: ["task_501"] },
  { id: "cat07", name: "テスト", items: ["task_601"] },
  { id: "cat08", name: "デバッグ", items: ["task_701"] },
  { id: "cat09", name: "運用", items: ["task_801"] },
  { id: "cat10", name: "保守", items: ["task_901"] },
  { id: "cat11", name: "調査", items: ["task_1001"] },
  { id: "cat12", name: "改善", items: ["task_1101"] },
  { id: "cat13", name: "整理", items: ["task_1201"] },
  { id: "cat14", name: "拡張", items: ["task_1301"] },
  { id: "cat15", name: "その他", items: ["task_1401"] }
];


// タスク定義（増えてもここだけ触る）
const tasks = {
  task_001: { text: "環境構築", mark: "important" },
  task_002: { text: "基本操作", mark: null },
  task_003: { text: "必須設定", mark: "warning" },
  task_101: { text: "応用理解", mark: null },
  task_102: { text: "最適化", mark: "important" }
};
