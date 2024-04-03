let students = [
  { pic: 'https://randomuser.me/api/portraits/men/9.jpg', id: 1, name: 'Can', surname: 'Yılmaz', age: '24', gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/11.jpg', id: 2, name: 'Zeynep', surname: 'Kara', age: 20, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/14.jpg', id: 3, name: 'Mehmet', surname: 'Demir', age: 21, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/45.jpg', id: 4, name: 'Ayşe', surname: 'Koç', age: 19, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/81.jpg', id: 5, name: 'Emir', surname: 'Çelik', age: 20, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/65.jpg', id: 6, name: 'Selin', surname: 'Taş', age: 22, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/40.jpg', id: 7, name: 'Burak', surname: 'Şahin', age: 21, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/32.jpg', id: 8, name: 'Ebru', surname: 'Aydın', age: 20, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/71.jpg', id: 9, name: 'Kadir', surname: 'Güneş', age: 19, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/72.jpg', id: 10, name: 'Deniz', surname: 'Türk', age: 22, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/47.jpg', id: 11, name: 'Ali', surname: 'Ateş', age: 20, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/28.jpg', id: 12, name: 'Ceren', surname: 'Yıldız', age: 21, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/57.jpg', id: 13, name: 'Umut', surname: 'Kara', age: 19, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/68.jpg', id: 14, name: 'Nil', surname: 'Ay', age: 22, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/42.jpg', id: 15, name: 'Hasan', surname: 'Kurt', age: 24, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/64.jpg', id: 16, name: 'Zeynep', surname: 'Kaplan', age: 21, gender: 'Kadın' },
  { pic: 'https://randomuser.me/api/portraits/men/44.jpg', id: 17, name: 'Ahmet', surname: 'Demir', age: 19, gender: 'Erkek' },
  { pic: 'https://randomuser.me/api/portraits/women/10.jpg', id: 18, name: 'Nur', surname:'Çetin', age: 22, gender:'Kadın' },
  { pic:'https://randomuser.me/api/portraits/men/62.jpg', id :19, name:'Can', surname:'Aydın',age :24 ,gender:'Erkek'},
  { pic:'https://randomuser.me/api/portraits/women/3.jpg',id :20,name:'Gizem',surname:'Erdem',age :21 ,gender:'Kadın'}
];


let table = document.getElementById("studentTable");
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let row = table.insertRow(-1);

  let cell1 = row.insertCell(0);
  let img = document.createElement('img');
  img.src = students[i].pic;
  cell1.appendChild(img);

  let detailsRow = table.insertRow(-1);
  let detailsCell = detailsRow.insertCell(0);
  detailsCell.colSpan = 4;
  detailsCell.innerHTML = student.id + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + student.name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + student.surname + "&nbsp;&nbsp;&nbsp;" + student.age + "&nbsp;&nbsp;&nbsp;" + student.gender;

}


  let newStudents = [];

  function addStudent() {
    let newId = prompt('İd si?');
    let newName = prompt('Adı?');
    let newSurname = prompt('Soyadı?');
    let newAge = prompt('Yaşı?');
    let newGender = prompt('Cinsiyeti?');
    let newPic = prompt('Resim URL\'si?');
  
    let newStudent = {
      id: newId,
      name: newName,
      surname: newSurname,
      age: newAge,
      gender: newGender,
      pic: newPic
    };
  
    newStudents.push(newStudent);
  
    let table = document.getElementById('studentsTable');
    
    let row = table.insertRow(-1);
    
    let cell1 = row.insertCell(0);
    let img = document.createElement('img');
    img.src = newPic;
    cell1.appendChild(img);
    
    let detailsRow = table.insertRow(-1);
    let detailsCell = detailsRow.insertCell(0);
    detailsCell.colSpan = 4;
    detailsCell.innerHTML = '<strong>' + newStudent.id + '</strong>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + newStudent.name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + newStudent.surname + "&nbsp;&nbsp;&nbsp;" + newStudent.age + "&nbsp;&nbsp;&nbsp;" + newStudent.gender;

  }


 document.getElementById("deleteAllBtn").addEventListener("click", deleteAllStudents);

  function deleteAllStudents() {
    let studentTable = document.getElementById("studentTable");
    let studentRows = Array.from(studentTable.children);
  
    studentRows.forEach(function(row) {
      studentTable.removeChild(row);
    });
  }


  document.getElementById("deleteOneBtn").addEventListener("click", deleteOneStudent);

function deleteOneStudent() {
  let confirmation = confirm("Öğrenciyi silmek istediğinize emin misiniz?");
  if (confirmation) {
    let studentIdToDelete = prompt("Silmek istediğiniz öğrencinin ID'sini girin:");
    function findStudentById(id) {
      for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
          return i;
        }
      }
      return -1;
    }
    let studentIndex = findStudentById(studentIdToDelete);
    if (studentIndex !== -1) {
      let student = students[studentIndex];
      students.splice(studentIndex, 1);
      updateStudentTable();
      alert("Öğrenci silindi.");

      let img = document.querySelector(`img[src="${student.pic}"]`);
      if (img) {
        img.remove();
      }
    } else {
      alert("Belirtilen ID'ye sahip öğrenci bulunamadı.");
    }
  }
}

function updateStudentTable() {
  let table = document.getElementById("studentTable");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let img = document.createElement("img");
    img.src = student.pic;
    cell1.appendChild(img);
    let detailsRow = table.insertRow(-1);
    let detailsCell = detailsRow.insertCell(0);
    detailsCell.colSpan = 4;
    detailsCell.innerHTML =
      student.id +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
      student.name +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
      student.surname +
      "&nbsp;&nbsp;&nbsp;" +
      student.age +
      "&nbsp;&nbsp;&nbsp;" +
      student.gender;
  }
}


const filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", () => {
  const filterText = document.getElementById("filterInput").value.toLowerCase();
  const filteredStudents = students.filter(student => student.name.toLowerCase().indexOf(filterText) !== -1);
  createStudentTable(filteredStudents);
});

function createStudentTable(data) {
  const tableBody = document.getElementById("studentTable");
  tableBody.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const student = data[i];
    const row = tableBody.insertRow(-1);

    const cell1 = row.insertCell(0);
    const img = document.createElement('img');
    img.src = student.pic;
    cell1.appendChild(img);

    const detailsRow = tableBody.insertRow(-1);
    const detailsCell = detailsRow.insertCell(0);
    detailsCell.colSpan = 4;
    detailsCell.innerHTML = `${student.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${student.surname}&nbsp;&nbsp;&nbsp;${student.age}&nbsp;&nbsp;&nbsp;${student.gender}`;
  }
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  document.getElementById("filterInput").value = "";
  createStudentTable(students);
});


