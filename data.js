// カテゴリ定義（自分で管理する前提）
const categories = [
  {
    id: "basic",
    name: "基礎",
    items: ["task_001", "task_002", "task_003"]
  },
  {
    id: "advanced",
    name: "応用",
    items: ["task_101", "task_102"]
  }
];

// タスク定義（増えてもここだけ触る）
const tasks = {
  task_001: { text: "環境構築", mark: "important" },
  task_002: { text: "基本操作", mark: null },
  task_003: { text: "必須設定", mark: "warning" },
  task_101: { text: "応用理解", mark: null },
  task_102: { text: "最適化", mark: "important" }
};
