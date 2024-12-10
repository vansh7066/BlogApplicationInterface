const API_URL = "https://newsapi.org/v2/everything?q=tesla&from=2024-11-09&sortBy=publishedAt&apiKey=8751668d62b24211bf29c6649a8de079";
const blogContainer = document.getElementById("blog-container");

// Fetching and displaying all the blog posts
async function fetchBlogs() {
    try {
        const response = await fetch(API_URL);
        const { articles } = await response.json();

        blogContainer.innerHTML = "";
        articles.forEach(article => {
            const blogElement = document.createElement("div");
           //blogContainer.style.background = "lightgray"
            blogElement.classList.add("blog-post");

            blogElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description ? article.description.slice(0, 100) : "No description available"}...</p>
                <button onclick="viewBlog('${article.url}')">Read More</button>
            `;

            blogContainer.appendChild(blogElement);
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
}

// Viewing each and every blog
async function viewBlog(url) {
    try {
        window.open(url, "_blank"); // Open the new blog in a new tab.
    } catch (error) {
        console.error("Error opening blog:", error);
    }
}

// Initializing the fetchBlog function
fetchBlogs();
