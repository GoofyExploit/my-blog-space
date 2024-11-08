function filterPosts() {
    // Get the search input value and convert it to lowercase
    const input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all post elements
    const posts = document.querySelectorAll('.post');

    // Loop through each post and check if it matches the search input
    posts.forEach(post => {
        const title = post.querySelector('.post__title a').textContent.toLowerCase();
        const body = post.querySelector('.post__body').textContent.toLowerCase();

        // If the title or body contains the input, show the post; otherwise, hide it
        if (title.includes(input) || body.includes(input)) {
            post.style.display = 'block'; // Show the post
        } else {
            post.style.display = 'none'; // Hide the post
        }
    });
}