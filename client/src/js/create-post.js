function sendPost(post){
    return fetch('/posts', {
        method: 'post',
        body: JSON.stringify(post),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(
        (res) => {
            res.json();
        }
    )
}

const $popup = document.getElementById('popup'),
      $popupToggle = document.getElementById('addPost'),
      $popupClose = document.querySelector('.close');
      $createPost = document.getElementById('createPost');

$popupToggle.onclick = () => {
    $popup.style.display = 'block';
};

$popupClose.onclick = () => {
    $popup.style.display = 'none';
}

$createPost.onclick = () => {
    const authorValue = document.getElementById('author').value,
          titleValue = document.getElementById('title').value,
          textValue = document.getElementById('text').value;
    const Post = {
        author: authorValue,
        title: titleValue,
        text: textValue,
    }
    sendPost(Post);
    $popup.style.display = 'none';
    window.location.reload();
}

window.onclick = (el) => {
    if(el.target == $popup){
        $popup.style.display = 'none';
    }
}