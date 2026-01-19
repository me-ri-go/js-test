'use strict';

const myBlog = {
    title: 'javascriptなめんなよ！',
    author: 'webのきちがい',
    addPost: () => {
        console.log('記事を投稿したよ');
    },
    deletePost: () => {
        console.log('記事を削除したよ');
    }
}
console.table(myBlog);
console.log(myBlog.title);