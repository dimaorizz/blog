function deletePost(id){
    return fetch('/posts/' + id, {
        method: 'delete'
    }).then(
        (res) => {
            res.json();
        }
    )
}

const delPost = () => {
    const id = event.target.getAttribute('data-id');
    deletePost(id);
    window.location.reload();
}