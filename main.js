document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getJson').addEventListener('click', getJson);
document.getElementById('getApi').addEventListener('click', getApi);
document.getElementById('addPost').addEventListener('submit', getPost);

function getJson(){
    fetch('sample.json')
    .then((res) =>  res.json())
    .then((data) => {
        let output = '<h2>Users:</h2>';
        data.forEach(function(user){
            output += `
            <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function getApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>  res.json())
    .then((data) => {
        let output = '<h2>Posts:</h2>';
        data.forEach(function(post){
            output += `
            
            <ul>
            <li class= "title">${post.title}</li>
            <li class= "body">${post.body}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function getPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('textArea').value;

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}



function getText(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = `<p>${data}</p> `;
    })
    .catch((err) => console.log(err))

}



 