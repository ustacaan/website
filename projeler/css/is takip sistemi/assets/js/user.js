
const todos = [[
 
  {
    "userId": 1,
    "id": 1,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "fugiat veniam minus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 3,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 2,
    "id": 4,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": true
  },
  {
    "userId": 3,
    "id": 5,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 3,
    "id": 6,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 4,
    "id": 7,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 4,
    "id": 8,
    "title": "molestiae perspiciatis ipsa",
    "completed": true
  },
  {
    "userId": 5,
    "id": 9,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 5,
    "id": 10,
    "title": "vero rerum temporibus dolor",
    "completed": false
  },
  {
    "userId": 6,
    "id": 11,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
      "userId": 6,
      "id": 12,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 7,
      "id": 13,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 7,
      "id": 14,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 8,
      "id": 15,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 8,
      "id": 16,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 9,
      "id": 17,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": true
    },
    {
      "userId": 9,
      "id": 18,
      "title": "illo expedita consequatur quia in",
      "completed": true
    },
    {
      "userId": 10,
      "id": 19,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 10,
      "id": 20,
      "title": "delectus aut autem",
      "completed": true
    },
    {
      "userId": 11,
      "id": 21,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 11,
      "id": 22,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": false
    },
    {
      "userId": 12,
      "id": 23,
      "title": "vero rerum temporibus dolor",
      "completed": false
    },
    {
      "userId": 12,
      "id": 24,
      "title": "ipsa repellendus fugit nisi",
      "completed": false
    }
]];
const users = [[
  {
    id: 1,
    name: 'Leanne Graham'
  },
  {
    id: 2,
    name: 'Ervin Howell'
  },
  {
    id: 3,
    name: 'Clementine Bauch'
  },
  {
    id: 4,
    name: 'Patricia Lebsack'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich'

  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir'
  },
  {
    id: 9,
    name: 'Glenna Reichert'
  },
  {
    id: 10,
    name: 'Clementina DuBuque'
  },
  {
    id: 11,
    name: 'John Smith'
  },
  {
    id: 12,
    name: 'Emily Johnson'
  }
]];
  
  
    const userActivity = {};

    for (const user of users[0]) {
      const userName = user.name;

      const userId = user.id;

      let activeTaskCount = 0;

      for (const task of todos[0]) {
        if (task.userId === userId && task.completed) {
          activeTaskCount++;
        }
      }

      userActivity[userName] = activeTaskCount;
    }

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function() {
      const searchText = searchInput.value.toLowerCase();
    
      const userList = document.getElementById("userList");
      userList.innerHTML = '';
    
      for (const userName in userActivity) {
        if (userName.toLowerCase().includes(searchText)) {
          const listItem = document.createElement("li");
          const todoItem = document.createElement("p");
          
          listItem.textContent = `${userName}`;
          todoItem.textContent = `${userActivity[userName]} Active`;
    
          const userUl = document.createElement("ul");
          userUl.appendChild(listItem);
          userUl.appendChild(todoItem);
    
          userList.appendChild(userUl);
        }
      }
    });
    

const newUserForm = document.getElementById("newUserForm");
const newUserNameInput = document.getElementById("newUserNameInput");
const newUserIdInput = document.getElementById("newUserIdInput");
const newTaskCountInput = document.getElementById("newTaskCountInput");
const tasksInputs = document.getElementById("tasksInputs");


newUserForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newUserName = newUserNameInput.value.trim();

  const newUserId = parseInt(newUserIdInput.value);

  const newTaskCount = parseInt(newTaskCountInput.value);

  if (newUserName.length === 0) {
    alert("Lütfen bir kullanıcı adı girin.");
    return;
  }

  const newUser = {
    id: newUserId,
    name: newUserName,
  };

  newUser.tasks = [];

  let newActiveTaskCount = 0;

  for (let i = 1; i <= newTaskCount; i++) {
    const taskName = prompt(`${i}. What Is Job?`);

    const isCompleted = prompt(`Is "${taskName}" the job completed? ( Yes - No )`);

    newUser.tasks.push({
      title: taskName,
      completed: isCompleted === "yes" || isCompleted === "Yes",

    });

    if (!newUser.tasks[i - 1].completed) {
      if (isCompleted === "no" || isCompleted === "No") {
        newActiveTaskCount++;
      }
    }
  }

  users[0].push(newUser);

  userActivity[newUser.name] = newActiveTaskCount;

  newUserNameInput.value = '';
  newUserIdInput.value = '';
  newTaskCountInput.value = '';
  tasksInputs.innerHTML = '';

  updatePage();
});


    updatePage();

    function updatePage() {
      for (const user of users[0]) {
        const userName = user.name;
        const userId = user.id;
        let activeTaskCount = 0;

        for (const task of todos[0]) {
          if (task.userId === userId && task.completed) {
            activeTaskCount++;
          }
        }
        userActivity[userName] = activeTaskCount;
      }

      searchInput.dispatchEvent(new Event("input"));
    }




    function filterUser() {
      const categorySelect = document.getElementById("category");
      const selectedCategory = categorySelect.value;
      const userList = document.getElementById("userList");
      
      userList.innerHTML = '';
  
      for (const userName in userActivity) {
        if (selectedCategory === "completed" && userActivity[userName] > 0) {

          const listItem = document.createElement("ul");
          listItem.textContent = `${userName} (${userActivity[userName]} Active)`;
          userList.appendChild(listItem);
        } else if (selectedCategory === "continuing" && userActivity[userName] === 0) {

          const listItem = document.createElement("ul");
          listItem.textContent = `${userName} (0 Active)`;
          userList.appendChild(listItem);
        } else if (selectedCategory === "" || (selectedCategory !== "completed" && selectedCategory !== "continuing")) {

          const listItem = document.createElement("ul");
          listItem.textContent = `${userName} (${userActivity[userName]} Active)`;
          userList.appendChild(listItem);
        }
      }
    }


   







  
    

 






 
 



