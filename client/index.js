const genCard = (data) => {
    return `
        <div class="post">
            <h2 class="post-title">${data.title}</h2>
            <p class="post-text">${data.text}</p>
            <div class="post-details">
                <p class="post-date">${new Date(data.date).toLocaleDateString()}</p>
                <p id = "post-id" class="post-id">ID: ${data._id}</p>
                <p class="post-author">Author: ${data.author}</p>
                <div class="post-likes">
                        <p class="post-likes-amount">${data.likes}</p>
                        <i id= "post-like-btn" class="fas fa-heart post-like"></i>
                </div>
            </div>
            <div class = "post-footer">
                <i onclick="delPost()" id="deletePost" class="fas fa-trash-alt del" data-id =${data._id}></i>
            </div>
        </div>
    `
};

function getPosts(){
    return fetch('/posts', {method: 'get'}).then(res => res.json());
}

const findPosts = () => {
    const $output = document.getElementById('posts');

    getPosts().then((res) => {
        for(let i = 0; i < res.length; i++){
            $output.innerHTML += genCard(res[i]);
        }
    });
};

document.addEventListener('DOMContentLoaded', findPosts());