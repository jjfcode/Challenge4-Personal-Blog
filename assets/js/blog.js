const section = document.querySelector('section');
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

function loadBlogs() {
    section.textContent = ''; // Clear previous content
    for (let i = 0; i < blogs.length; i++) {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const hr = document.createElement('hr');
        const pSentence = document.createElement('p');
        const pPost = document.createElement('p');

        h3.textContent = blogs[i].title; // Use index i to get the current blog
        pSentence.classList.add('sentence');
        pSentence.textContent = blogs[i].content;
        pPost.innerHTML = 'Posted By: <span>' + blogs[i].username + '</span>';

        article.appendChild(h3);
        article.appendChild(hr);
        article.appendChild(pSentence);
        article.appendChild(pPost);
        section.appendChild(article); // Append the article to the section
    }
};

loadBlogs(); // Call the function to load blogs