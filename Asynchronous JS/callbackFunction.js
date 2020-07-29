const posts = [
    {title:"Post One", body:"This is Post One" },
    {title:"Post Two", body:"This is Post Two" }
];

// Synchronous way
// function createPost(post){
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);

// }

// function getPost(){
//     setTimeout(() => {
//         let output = '';

//         posts.forEach(function(post){
//             output += `<li> ${post.title} </li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);

// }

// createPost({title:"Post Three", body:"This is Post Three" });
// getPost();

// Asynchronous way

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);

}

function getPost(){
    setTimeout(() => {
        let output = '';

        posts.forEach(function(post){
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);

}

createPost({title:"Post Three", body:"This is Post Three" }, getPost);
