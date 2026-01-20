'use strict';

// const myBlog = {
//     title: 'javascriptなめんなよ！',
//     author: 'webのきちがい',
//     addPost: () => {
//         console.log('記事を投稿したよ');
//     },
//     deletePost: () => {
//         console.log('記事を削除したよ');
//     }
// }

// console.log(myBlog.title);
// myBlog.addPost();
// console.table(myBlog);
// console.log(myBlog.title);

// document.getElementById();
// document.getElementsByClassName();

// const btn01 = document.getElementById('btn01');
// console.log(btn01);

// const btn = document.getElementsByClassName('btn');
// console.log(btn);

// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click', function() {
//     console.log(this);
// });

// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click', function() {
//     // this.classList.add('clicked');
//     this.classList.toggle('clicked');
// });

//error
// const btn = document.getElementsByClassName('btn');
// btn.addEventListener('click', function() {
//     // this.classList.add('clicked');
//     this.classList.toggle('clicked');
// });

//forループを使ったクリックイベント
const btn = document.getElementsByClassName('btn');
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
}