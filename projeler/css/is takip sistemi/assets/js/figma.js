//**********************************************************************************
// Tüm "menu-trigger" öğelerini seçin
var menuTriggers = document.querySelectorAll("#menu-trigger");

// Her "menu-trigger" için aynı olay dinleyicisini ekleyin
menuTriggers.forEach(function (menuTrigger) {
    menuTrigger.addEventListener("click", function (event) {
        // Varsayılan olayı önle
        event.preventDefault();
        
        // İlgili "menu-options" öğesini yakalayın
        var menuOptions = menuTrigger.nextElementSibling;

        // "menu-options" görünürse, gizle; görünmezse, göster
        if (menuOptions.style.display === "none" || menuOptions.style.display === "") {
            menuOptions.style.display = "block";
        } else {
            menuOptions.style.display = "none";
        }
    });
});


//**********************************************************************************
// Tüm "delete" öğelerini seçin
var deleteButtons = document.querySelectorAll("#delete");

// Her "delete" öğesi için aynı olay dinleyicisini ekleyin
deleteButtons.forEach(function (deleteButton) {
    deleteButton.addEventListener("click", function (event) {
        event.preventDefault();

        // "toDo" öğesini sil
        var toDo = deleteButton.closest(".toDo");
        toDo.parentNode.removeChild(toDo);
    });
});


//**********************************************************************************
// taşıma işlemi
document.addEventListener("DOMContentLoaded", function() {
    // Get all the "menu-trigger" elements for moving to "progres" section
    const moveProgressTriggers = document.querySelectorAll("#moveProgress");
    moveProgressTriggers.forEach(function(trigger) {
        trigger.addEventListener("click", function(event) {
            const toDo = event.target.closest(".toDo");
            if (toDo) {
                const progresSection = document.querySelector(".progres");
                if (!progresSection.contains(toDo)) {
                    progresSection.appendChild(toDo);
                    progresSection.appendChild(progresSection.querySelector(".plus"));
                }
            }
        });
    });

    // Get all the "menu-trigger" elements for moving to "done" section
    const moveDoneTriggers = document.querySelectorAll("#moveDone");
    moveDoneTriggers.forEach(function(trigger) {
        trigger.addEventListener("click", function(event) {
            const toDo = event.target.closest(".toDo");
            if (toDo) {
                const doneSection = document.querySelector(".done");
                doneSection.appendChild(toDo);
                doneSection.appendChild(doneSection.querySelector(".plus"));
            }
        });
    });

    // Get all the "menu-trigger" elements for moving to "box" section
    const moveBoxTriggers = document.querySelectorAll("#moveBox");
    moveBoxTriggers.forEach(function(trigger) {
        trigger.addEventListener("click", function(event) {
            const toDo = event.target.closest(".toDo");
            if (toDo) {
                const boxSection = document.querySelector(".box");
                boxSection.appendChild(toDo);
                boxSection.appendChild(boxSection.querySelector(".plus"));
            }
        });
    });
});

 


//**********************************************************************************
 
 // Modal açma fonksiyonu
document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

// Modal kapatma fonksiyonu
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("addTodo").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Modal dışına tıklandığında kapatma
window.addEventListener("click", function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

//********************************************************************************
   // Income açma kapama
   document.getElementById('toggle-list').addEventListener('click', function() {
    var listContainer = document.getElementById('list-container');
    var toggleList = document.getElementById('toggle-list');
    
    if (listContainer.style.display === 'none' || listContainer.style.display === '') {
        listContainer.style.display = 'block';
        toggleList.classList.add('active');
    } else {
        listContainer.style.display = 'none';
        toggleList.classList.remove('active');
    }
});

// ************************************************************************************

//  new taska todo ekleme
 
document.addEventListener("DOMContentLoaded", function() {
  const doneLink = document.getElementById("addTodo");
  const toDo = document.querySelector(".toDo");
  const newDiv = document.querySelector(".new");

  doneLink.addEventListener("click", function(event) {
    event.preventDefault();
    newDiv.appendChild(toDo.cloneNode(true));
  });
});
 
  //////////////////////////////////////////////////
 
//   todolara süre ekleme

// Generate a random time
const randomTime = () => [...Array(3)].map(() => Math.floor(Math.random() * 60));

// Decrement a time by one second, wrapping around as needed
const decrementTime = ([h, m, s]) => {
  if (s > 0) {
    s--;
  } else {
    s = 59;
    if (m > 0) {
      m--;
    } else {
      m = 59;
      if (h > 0) {
        h--;
      } else {
        [h, m, s] = randomTime();
      }
    }
  }
  return [h, m, s];
};

// Format a time as a string in HH:MM:SS format
const formatTime = ([h, m, s]) => h.toString().padStart(2, '0') + ':' + m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');

// Update the time displayed in an element
const updateTimeForElement = (element) => {
  const time = JSON.parse(element.dataset.time ?? JSON.stringify(randomTime()));
  element.dataset.time = JSON.stringify(decrementTime(time));
  element.innerHTML = formatTime(time);
};

// Update the time displayed in all saat elements every second
const saatElements = document.querySelectorAll('#saat');
setInterval(() => saatElements.forEach(updateTimeForElement), 1000);


////////////////////////////

var metinKutusu = document.getElementById("metinKutusu");

        // Metin kutusuna odaklandığınızda, varsayılan metni temizleyin
        metinKutusu.addEventListener("focus", function() {
            if (metinKutusu.textContent === "Write your comment here...") {
                metinKutusu.textContent = "";
            }
        });

        // Metin kutusundan çıktığınızda, metin kutusunu kontrol edin ve gerekirse varsayılan metni geri ekleyin
        metinKutusu.addEventListener("blur", function() {
            if (metinKutusu.textContent === "") {
                metinKutusu.textContent = "Write your comment here...";
            }
        });