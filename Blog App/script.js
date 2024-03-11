// Sample data for initial blog posts
let posts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' }
];

// Function to display blog posts
function displayPosts() {
    const blogPosts = document.getElementById('blog-posts');
    blogPosts.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        blogPosts.appendChild(postElement);
    });
}

// Function to add a new post
function addPost() {
    const titleInput = document.getElementById('post-title');
    const contentInput = document.getElementById('post-content');
    const title = titleInput.value;
    const content = contentInput.value;
    if (title && content) {
        posts.push({ title, content });
        displayPosts();
        titleInput.value = '';
        contentInput.value = '';
    } else {
        alert('Please enter both title and content.');
    }
}

// Display initial posts
displayPosts();
