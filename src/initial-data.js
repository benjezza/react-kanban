const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take out the garbage",
      dueDate: new Date(new Date().getTime() + 12 * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "SALES",
      subTitle: "3 Weeks",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "DESIGN",
        subTitle: "3 Weeks",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "DESIGNER APPROVAL",
        subTitle: "2 Days",
      taskIds: [],
    },
    "column-4": {
        id: "column-4",
        title: "SALES APPROVAL",
        subTitle: "2 Days",
        taskIds: [],
    },
    "column-5": {
        id: "column-5",
        title: "HOTEL APPROVAL",
        subTitle: "1 Week",
        taskIds: [],
    },
    "column-6": {
        id: "column-6",
        title: "AT THE PRINTERS",
        subTitle: "2 Weeks",
        taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5", "column-6"],
};
export default initialData;
