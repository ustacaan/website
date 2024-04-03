/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/


const postList = document.querySelector('.post-list');
const content = document.querySelector('.content');


const baseUrl = 'http://localhost:1337/';
const prefixUrl = baseUrl + 'api/';
const requestUrlPost = prefixUrl + 'posts';
const servicePrefix = 'http://localhost:1337/api/posts/';

let posts = [];

async function dataLoad(){
    posts = await fetch(`${requestUrlPost}`).then(x => x.json());
    render();
}

function render(){
    
    for (const post of posts.data) {
        
        postList.innerHTML += `
        <div class="post-preview">
                    <a href="#/${post.id}">
                        <h2 class="post-title">${post.attributes.title}</h2>
                        <h3 class="post-subtitle">${post.attributes.summary}</h3>
                    </a>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">${post.attributes.writer}</a>
                        ${post.attributes.publishedAt}
                    </p>
                </div>
                <hr class="my-4" />`
        
    }
}
window.addEventListener('hashchange',changeRoute);
function changeRoute(){
    const pageUrl = location.hash.substring(2)
    loadPage(pageUrl);
}

async function loadPage(url){
    
    postList.innerHTML = '';
    if(url === ''){
    dataLoad();
    }else{
        loadAllPage(servicePrefix + url);
    }
    
}

async function loadAllPage(url) {
    
    const post = await fetch(url).then(x => x.json());
    

    postList.innerHTML += `<div class="post-preview">
                            <h1>${post.data.attributes.title}</h1>
                            <h5 class="subheading">${post.data.attributes.summary}</h5>

                           <div>${post.data.attributes.content}</div>
                           <p class="post-meta">
                             Posted by
                             ${post.data.attributes.writer}
                             ${post.data.attributes.publishedAt}
                           </p>
                           <hr class="my-4" />
                           </div>
    `

}

dataLoad();

// const body = document.querySelector('body');
// let posts = [];

// async function dataLoad(){
//     posts = await fetch('http://localhost:1337/api/posts').then(x => x.json());
//     render();
// }

// function render(){
//     for (const post of posts.data) {
//         postList.innerHTML += `
//         <div class="post-preview">
//                         <a class='link' data-id=${post.id} href="#">
//                             <h2 class="post-title">${post.attributes.title}</h2>
//                             <h3 class="post-subtitle">${post.attributes.summary}</h3>
//                         </a>
//                         <p class="post-meta">
//                             Posted by
//                             <a href="#!">Begüm Ircı</a>
//                             ${post.attributes.publishedAt}
//                         </p>
//                         <hr class="my-4" />
//                     </div>`
//         bindClick();
//     }
// }

// function clickHandler(e){
//     moreDetail(this.dataset.id);
// }

// async function moreDetail(postId){
//     let newPost = await fetch(`http://localhost:1337/api/posts/${postId}`).then(x => x.json());
//     showMoreDetail(newPost);
// }


// function showMoreDetail(newPost){
    

//     body.innerHTML = '';

//     body.innerHTML += `
//      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
//             <div class="container px-4 px-lg-5">
//                 <a class="navbar-brand" href="index.html">Start Bootstrap</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                     Menu
//                     <i class="fas fa-bars"></i>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarResponsive">
//                     <ul class="navbar-nav ms-auto py-4 py-lg-0">
//                         <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
//                         <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
//                         <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
//                         <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         <!-- Page Header-->
//         <header class="masthead" style="background-image: url('assets/img/post-bg.jpg')">
//             <div class="container position-relative px-4 px-lg-5">
//                 <div class="row gx-4 gx-lg-5 justify-content-center">
//                     <div class="col-md-10 col-lg-8 col-xl-7">
//                         <div class="post-heading">
//                             <h1>${newPost.data.attributes.title}</h1>
//                             <h2 class="subheading">${newPost.data.attributes.summary}</h2>
//                             <span class="meta">
//                                 Posted by
//                                 <a href="#!">Begüm Ircı</a>
//                                 ${newPost.data.attributes.publishedAt}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//         <!-- Post Content-->
//         <article class="mb-4">
//             <div class="container px-4 px-lg-5">
//                 <div class="row gx-4 gx-lg-5 justify-content-center">
//                     <div class="col-md-10 col-lg-8 col-xl-7">
//                         ${newPost.data.attributes.content}
//                     </div>
//                 </div>
//             </div>
//         </article>
//         <!-- Footer-->
//         <footer class="border-top">
//             <div class="container px-4 px-lg-5">
//                 <div class="row gx-4 gx-lg-5 justify-content-center">
//                     <div class="col-md-10 col-lg-8 col-xl-7">
//                         <ul class="list-inline text-center">
//                             <li class="list-inline-item">
//                                 <a href="#!">
//                                     <span class="fa-stack fa-lg">
//                                         <i class="fas fa-circle fa-stack-2x"></i>
//                                         <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
//                                     </span>
//                                 </a>
//                             </li>
//                             <li class="list-inline-item">
//                                 <a href="#!">
//                                     <span class="fa-stack fa-lg">
//                                         <i class="fas fa-circle fa-stack-2x"></i>
//                                         <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
//                                     </span>
//                                 </a>
//                             </li>
//                             <li class="list-inline-item">
//                                 <a href="#!">
//                                     <span class="fa-stack fa-lg">
//                                         <i class="fas fa-circle fa-stack-2x"></i>
//                                         <i class="fab fa-github fa-stack-1x fa-inverse"></i>
//                                     </span>
//                                 </a>
//                             </li>
//                         </ul>
//                         <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div>
//                     </div>
//                 </div>
//             </div>
//         </footer>`



// }


// function bindClick(){
//     for (const a of document.querySelectorAll('.link')) {
//         a.addEventListener('click',clickHandler);
//     }
// }







window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// dataLoad();