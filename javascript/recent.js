import { blogposts } from "./data.js";

const navBar = document.getElementById("navigation-bar");

document
  .getElementById("navigation-menu")
  .addEventListener("click", openNavMenu);

document.addEventListener("click", () => {
  if (!navBar.classList.contains("hide-nav-bar")) {
    navBar.classList.toggle("hide-nav-bar");
  }
});

function openNavMenu(e) {
  e.stopPropagation();
  navBar.classList.toggle("hide-nav-bar");
}

function getBlogRollHtml() {
  return blogposts
    .map((post) => {
      const publishDate = new Date(post.date);
      let options = {
        month: "long",
        day: "numeric",
        year: "numeric",
      };
      return `<div class="article-card">
                    <a href="#">
                        <img class="card-image" alt="${post.alt}" src="${
        post.image
      }" />
                        <time datetime="${post.date}">${new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(publishDate)}</time>
                        <h2>${post.title}</h2>
                        <p>${post.subhed}</p>
                    </a>
                </div>`;
    })
    .join("");
}

document.getElementById("view-more").addEventListener("click", viewMoreClick);

function viewMoreClick() {
  document.getElementById(
    "blog-roll"
  ).innerHTML = `<h4 class="recent-posts-title blog-subhed">Recent Posts</h4>${getBlogRollHtml()}`;
}
