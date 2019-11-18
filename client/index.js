const genCard = (data) => {
    return `
        <div class="post">
            <h2 class="post-title">${data.title}</h2>
            <p class="post-text">${data.text}</p>
            <div class="post-details">
                <p class="post-date">${data.date.slice(0, 10)}</p>
                <p class="post-author">Author: ${data.author}</p>
                <div class="post-likes">
                        <p class="post-likes-amount">${data.likes} Likes</p>
                        <input class="post-btn-like" type="button" value="Like">
                </div>
            </div>
        </div>
    `
};

class PostsApi{
    static get(){
        return fetch('/posts', {method: 'get'}).then(res => res.json());
    }
}

const findPosts = () => {
    const $output = document.getElementById('posts');

    PostsApi.get().then((res) => {
        for(let i = 0; i < res.length; i++){
            $output.innerHTML += genCard(res[i]);
        }
    });
};

document.addEventListener('DOMContentLoaded', findPosts());