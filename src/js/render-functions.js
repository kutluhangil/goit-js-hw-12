import iziToast from "izitoast";

export function renderGallery(images) {
  const gallery = document.querySelector(".gallery");
  const markup = images
    .map((image) => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <p>${image.likes}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${image.views}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${image.comments}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${image.downloads}</p>
          </div>
        </div>
      </li>
    `;
    })
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
}

export function clearGallery() {
  document.querySelector(".gallery").innerHTML = "";
}

export function toggleLoadMore(isVisible) {
  const loadMoreBtn = document.querySelector(".load-more");
  if (isVisible) {
    loadMoreBtn.classList.remove("hidden");
  } else {
    loadMoreBtn.classList.add("hidden");
  }
}

export function showNoResultsMessage() {
  iziToast.error({
    title: "Error",
    message:
      "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
    backgroundColor: "#EF4040",
    titleColor: "#fff",
    messageColor: "#fff",
    iconColor: "#fff",
    close: true,
  });
}

export function showEndOfResultsMessage() {
  iziToast.info({
    title: "Info",
    message: "We're sorry, but you've reached the end of search results.",
    position: "topRight",
  });
}

export function showErrorMessage(error) {
  iziToast.error({
    title: "Error",
    message: `Something went wrong: ${error}`,
    position: "topRight",
  });
}
