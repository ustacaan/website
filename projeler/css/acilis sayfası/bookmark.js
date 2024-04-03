document.addEventListener("DOMContentLoaded", (event) => {
  const paragraphs = document.querySelectorAll("ul.one, ul#one, ul.two, ul#two, ul.three, ul#three");
  paragraphs.forEach((paragraph) => {
    paragraph.style.display = "none";
  });
  document.getElementById("one").style.display = "block";

  // Otomatik olarak alt çizgiyi ayarla
  const underline = document.getElementById("underline");
  const linkRect = document.querySelector("a.one").getBoundingClientRect();
  underline.style.width = linkRect.width + 'px';
  underline.style.transform = `translateX(${linkRect.left}px)`;
});

function showText(element) {
  event.preventDefault();
  const id = element.firstChild.className;
  const allowedIdsAndClasses = ["one", "two", "three"];
  if (allowedIdsAndClasses.includes(id)) {
    const paragraphs = document.querySelectorAll("ul.one, ul#one, ul.two, ul#two, ul.three, ul#three");
    paragraphs.forEach((paragraph) => {
      paragraph.style.display = "none";
    });
    document.getElementById(id).style.display = "block";

    const underline = document.getElementById("underline");
    const linkRect = element.getBoundingClientRect();
    underline.style.width = linkRect.width + 'px';
    underline.style.transform = `translateX(${linkRect.left}px)`;
  }
}


// **************


 
function toggleContent(id) {
  const content = document.getElementById('content' + id);

  if (content.style.display === 'block') {
    content.style.display = 'none';
    document.getElementById('arrowImage' + id).src = 'assets/img/blue arrow.svg';
    return;
  }

  const allContents = document.querySelectorAll('.content');
  allContents.forEach((element) => element.style.display = 'none');

  content.style.display = 'block';
  document.getElementById('arrowImage' + id).src = 'assets/img/red arrow.svg';

  const allArrowImages = document.querySelectorAll('.item img');
  allArrowImages.forEach((img, index) => {
    if (index !== id - 1) {
      img.src = 'assets/img/blue arrow.svg';
    }
  });
}



