import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import {
  renderGallery,
  clearGallery,
  toggleLoadMore,
  showNoResultsMessage,
  showEndOfResultsMessage,
  showErrorMessage,
} from "./js/render-functions.js";

const form = document.querySelector("#search-form");
const loadMoreBtn = document.querySelector(".load-more");
const loader = document.querySelector(".loader");

let query = "";
let page = 1;
const perPage = 40;
let totalHits = 0;

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

async function fetchData() {
  loader.classList.remove("hidden");
  // If loading more, hide button temporarily
  if (page > 1) toggleLoadMore(false);

  try {
    const data = await fetchImages(query, page, perPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      showNoResultsMessage();
      toggleLoadMore(false);
      return;
    }

    renderGallery(data.hits);
    lightbox.refresh();

    const maxPage = Math.ceil(totalHits / perPage);
    if (page >= maxPage) {
      toggleLoadMore(false);
      if (page > 1 || totalHits > 0) {
        showEndOfResultsMessage();
      }
    } else {
      toggleLoadMore(true);
    }

    // Smooth scroll only if loading more
    if (page > 1) {
      const galleryItem = document.querySelector(".gallery-item");
      if (galleryItem) {
        const { height: cardHeight } = galleryItem.getBoundingClientRect();
        window.scrollBy({
          top: cardHeight * 2,
          behavior: "smooth",
        });
      }
    }
  } catch (error) {
    showErrorMessage(error.message);
    toggleLoadMore(false);
  } finally {
    loader.classList.add("hidden");
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formQuery = event.target.elements.searchQuery.value.trim();

  if (!formQuery) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term",
      position: "topRight",
    });
    return;
  }

  query = formQuery;
  page = 1;
  totalHits = 0;
  clearGallery();
  toggleLoadMore(false); // Hide until loaded

  await fetchData();
  form.reset();
});

loadMoreBtn.addEventListener("click", async () => {
  page += 1;
  await fetchData();
});
