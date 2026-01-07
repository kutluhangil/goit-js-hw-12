<h1>📘 JavaScript Homework 12 — Async/Await Syntax & Pagination</h1>

<p>
This repository contains the implementation of <strong>Homework 12</strong>, which focuses on
modern asynchronous JavaScript, pagination techniques, and advanced interaction with backend APIs.
The project is a continuation of the previous image search application, now enhanced with
<strong>async/await</strong>, <strong>Axios</strong>, and <strong>pagination</strong>.
</p>

<hr />

<h2>🚀 Overview</h2>

<p>
Congratulations — you’ve reached the final stage of the JavaScript course! 💪<br />
In Module 12, the goal is to consolidate everything learned so far and apply it in a real-world scenario.
</p>

<p>This homework reinforces your understanding of:</p>

<ul>
  <li>async/await syntax</li>
  <li>Error handling in asynchronous code</li>
  <li>Pagination fundamentals</li>
  <li>Query parameter configuration</li>
  <li>The “Load more” pagination pattern</li>
  <li>Working with HTTP requests using Axios</li>
</ul>

<p>
All these concepts are applied by extending an image search application powered by the Pixabay API.
</p>

<hr />

<h2>📂 Project Structure</h2>

<pre>
goit-js-hw-12/
├─ src/
│  ├─ js/
│  │  ├─ api.js
│  │  ├─ gallery.js
│  │  └─ scroll.js
│  ├─ css/
│  │  └─ styles.css
│  └─ main.js
├─ public/
├─ dist/
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
</pre>

<p>
The project is built using <strong>Vite</strong> and follows a modular, scalable architecture.
</p>

<hr />

<h2>🔍 Main Goal — Image Search with Pagination</h2>

<p>
The application allows users to search images by keyword and view the results in a responsive gallery.
Images are loaded incrementally using pagination instead of loading all results at once.
</p>

<hr />

<h2>🔁 Refactoring & Async/Await</h2>

<ul>
  <li>The <code>fetch</code> API has been replaced with <strong>Axios</strong></li>
  <li>All asynchronous logic is rewritten using <strong>async/await</strong></li>
  <li>HTTP requests are extracted into reusable service functions</li>
</ul>

<p>Example:</p>

<pre>
async function fetchImages(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 20,
      page
    }
  });
  return response.data;
}
</pre>

<hr />

<h2>📄 Pagination Logic</h2>

<ul>
  <li>Pixabay API supports <code>page</code> and <code>per_page</code> parameters</li>
  <li>Each request returns a maximum of 20 images</li>
  <li>The initial page value starts at <strong>1</strong></li>
  <li>Each subsequent request increments the page number</li>
  <li>When a new search is performed, pagination resets</li>
</ul>

<hr />

<h2>🔘 Load More Button</h2>

<ul>
  <li>The <strong>Load more</strong> button is hidden when no images are displayed</li>
  <li>It appears after the first successful search</li>
  <li>Clicking the button loads the next page of images</li>
  <li>The button hides again when the collection ends</li>
</ul>

<hr />

<h2>🚫 End of Collection Handling</h2>

<p>
The Pixabay API returns a <code>totalHits</code> value, which indicates the total number of images
available for the search query.
</p>

<p>
When the user reaches the last page:
</p>

<ul>
  <li>The <strong>Load more</strong> button is hidden</li>
  <li>A notification appears with the message:</li>
</ul>

<blockquote>
"We're sorry, but you've reached the end of search results"
</blockquote>

<hr />

<h2>🖼️ Image Gallery & Lightbox</h2>

<ul>
  <li>Images are rendered as a gallery</li>
  <li>Each image is wrapped in a link element</li>
  <li><strong>SimpleLightbox</strong> is used for modal image previews</li>
  <li>The <code>refresh()</code> method is called after new images are added</li>
</ul>

<hr />

<h2>⬇️ Smooth Scrolling</h2>

<p>
After loading a new group of images, the page scrolls smoothly down by the height of two gallery cards.
This is achieved using:
</p>

<ul>
  <li><code>getBoundingClientRect()</code></li>
  <li><code>window.scrollBy()</code></li>
</ul>

<hr />

<h2>✅ Mentor Checklist</h2>

<ul>
  <li>Project built with Vite</li>
  <li>Axios used for all HTTP requests</li>
  <li>async/await syntax applied everywhere</li>
  <li>No console errors or warnings</li>
  <li>Pagination implemented correctly</li>
  <li>Load more button works as expected</li>
  <li>Previous results cleared on new search</li>
  <li>Images appended to DOM in a single operation</li>
  <li>SimpleLightbox refreshed after adding new images</li>
  <li>End-of-results message displayed correctly</li>
</ul>

<hr />

<h2>🔗 Links</h2>

<ul>
  <li><strong>GitHub Repository:</strong> https://github.com/USERNAME/goit-js-hw-12</li>
  <li><strong>Live Demo (GitHub Pages):</strong> https://USERNAME.github.io/goit-js-hw-12/</li>
</ul>

<hr />

<p>
<strong>Final Notes:</strong><br />
This homework demonstrates a professional JavaScript workflow using asynchronous programming,
API-driven UI updates, and scalable pagination logic.
</p>
