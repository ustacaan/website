const BackThisProjectBtn = document.querySelector(".BackThisProjectBtn");
const dialog = document.querySelector(".dialog");
const exit = document.querySelector(".exit");
const radioB = document.querySelectorAll(".radio");
const bamboo = document.querySelector("#bamboo");
const pledgeBars  = document.querySelectorAll(".pledgeBar");
const continueBtns = document.querySelectorAll(".continueBtns");
const thanksModal = document.querySelector(".thanksModal");
const gotIt = document.querySelector(".gotIt");
const bookmark = document.querySelector(".bookmark");
const bookmarkImg = document.querySelector(".bookmarkImg");
const counts = document.querySelectorAll(".count");

function init(){
    handleBackProjeBtn();
    bindExitBtn();
    radioBtns();
    bindContinueBtns();
    bindGotItBtn();
    handleBookmark();
}

function handleBackProjeBtn(){
    BackThisProjectBtn.addEventListener("click", function(e){
        e.preventDefault();
        dialog.showModal();
    })    
}

function bindExitBtn(){
    exit.addEventListener("click", function(e){
        e.preventDefault();
        dialog.close();
    })
}

const radioButtons = document.querySelectorAll('input[name="radio"]');

function radioBtns(){

    for (const radioButton of radioButtons) { 
        // console.log(radioButton.parentElement.parentElement.classList);
        radioButton.addEventListener("click", function(){
            if (radioButton.checked) {
                // this.parentElement.parentElement.classList.add("kontrol");
                for (const pledgeBar of pledgeBars) {
                    if (pledgeBar.dataset.number === this.id) {
                        // pledgeBar.style.display = "flex";
                        pledgeBar.classList.add("show");
                    }
                    else {
                        pledgeBar.classList.remove("show");
                    }
                }
                changeCount(this);
            }   
        })
        // if (radioButton.parentElement.parentElement.classList.contains("kontrol")) {
        //     radioButton.parentElement.parentElement.classList.remove("kontrol");
        // } 
        
    }
}

function bindContinueBtns(){
    for (const continueBtn of continueBtns) {
        continueBtn.addEventListener("click", function(){
            thanksModal.showModal();
            dialog.close();
            for (const radioButton of radioButtons) {
                radioButton.checked = false;
            }
        })
    }
}

function bindGotItBtn(){
    gotIt.addEventListener("click", function(){
        thanksModal.close();
    })
}
let sayac = 0;
function handleBookmark(){
    
    bookmark.addEventListener("click", function(){
        
        sayac++ ;
        console.log(sayac);
        if (sayac % 2 == 0) {
            this.classList.remove("bookmark3");
            this.firstChild.classList.remove("gizle");
        }
        else {
            this.classList.add("bookmark3");
            this.firstChild.classList.add("gizle");
        }

    })
}

function changeCount(value){
    for (const continueBtn of continueBtns) {
        continueBtn.addEventListener("click", function(){
            for (const count of counts) {
                if (continueBtn.dataset.devam === count.dataset.countid) {
                    if (Number(count.innerText) >= 1) {
                        if (Number(count.innerText) == 1) {
                        // console.log(value.parentElement.parentElement);
                        value.parentElement.parentElement.classList.add("soldur");
                        count.innerText = 0;
                        }
                        if (count.dataset.countid === value.id) {
                            // console.log(Number(count.innerText));
                            count.innerText = Number(count.innerText) - 1;
                        }    
                    }
                    else {
                        count.innerText = 0;
                    }
                }
                
            }
        })
    }
    
    
}


init();