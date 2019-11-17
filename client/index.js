const genCard = (data) => {
    return `
        <p>${data.text}</p>
    `
};

class PostsApi{
    static get(){
        return fetch('/posts', {method: 'get'}).then(res => res.json());
    }
}

const findPosts = () => {
    const $output = document.getElementById('container');

    PostsApi.get().then((res) => {
        for(let i = 0; i < res.length; i++){
            $output.innerHTML += genCard(res[i]);
        }
    });
};