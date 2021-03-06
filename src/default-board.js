import { uuid } from "./utils.js";

export default {
  name: "workshop",
  columns: [
    {
      name: "To Do",
      tasks: [
        {
          description: "Need to look at Rila. She's so easy to look at.",
          name: "Look at Rila",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "Feed Rila when she's hungry.",
          name: "Feed Rila",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "Watch movies with Rila, probably Kurosawa.",
          name: "Watch movies with Rila",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "Go to Disneyland with Rila and Madison",
          name: "Disneyland",
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "In Progress",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "",
          name: "second task",
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "Done",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
};
