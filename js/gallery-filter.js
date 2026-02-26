document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".gallery-tag");
  const items = document.querySelectorAll(".post-gallery-item");

  let activeTag = null;

  function updateActiveStates() {
    tags.forEach(tag => {
      if (activeTag && tag.dataset.tag === activeTag) {
        tag.classList.add("active");
      } else {
        tag.classList.remove("active");
      }
    });
  }

  tags.forEach(tag => {
    tag.addEventListener("click", function () {
      const selected = this.dataset.tag;

      // Toggle off if same tag clicked
      if (activeTag === selected) {
        activeTag = null;
        updateActiveStates();
        showAll();
        return;
      }

      activeTag = selected;

      // Highlight ALL matching tags
      updateActiveStates();

      // Filter gallery
      items.forEach(item => {
        const tagList = item.dataset.tags
          ? item.dataset.tags.split("\t")
          : [];

        item.style.display = tagList.includes(selected)
          ? ""
          : "none";
      });
    });
  });

  function showAll() {
    items.forEach(item => {
      item.style.display = "";
    });
  }
});