import React from "react";
import { createRoot } from "react-dom/client";
import { WithPinnedTasks } from "./TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<WithPinnedTasks />);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const firstTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(firstTaskInput).not.toBe(null);

  root.unmount();
});
