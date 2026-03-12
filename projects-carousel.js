const windowEl = document.getElementById("projects-window");
const trackEl = document.getElementById("projects-track");
const sidePrevButton = document.getElementById("projects-side-prev");
const sideNextButton = document.getElementById("projects-side-next");
const mobilePrevButton = document.getElementById("projects-mobile-prev");
const mobileNextButton = document.getElementById("projects-mobile-next");

if (windowEl && trackEl && sidePrevButton && sideNextButton) {
  const cardElements = Array.from(trackEl.querySelectorAll(".project-card-carousel"));
  let currentIndex = 0;
  let isPointerDown = false;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;

  function cardsPerView() {
    if (window.innerWidth <= 760) {
      return 1;
    }

    if (window.innerWidth <= 1100) {
      return 2;
    }

    return 3;
  }

  function maxIndex() {
    return Math.max(0, cardElements.length - cardsPerView());
  }

  function updateButtons() {
    const hasOverflow = maxIndex() > 0;
    sidePrevButton.disabled = !hasOverflow;
    sideNextButton.disabled = !hasOverflow;

    if (mobilePrevButton) {
      mobilePrevButton.disabled = !hasOverflow;
    }

    if (mobileNextButton) {
      mobileNextButton.disabled = !hasOverflow;
    }
  }

  function wrapIndex(nextIndex) {
    const lastIndex = maxIndex();

    if (lastIndex === 0) {
      return 0;
    }

    if (nextIndex < 0) {
      return lastIndex;
    }

    if (nextIndex > lastIndex) {
      return 0;
    }

    return nextIndex;
  }

  function syncIndexFromScroll() {
    const scrollLeft = windowEl.scrollLeft;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardElements.forEach((cardElement, index) => {
      const distance = Math.abs(cardElement.offsetLeft - scrollLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    currentIndex = Math.min(nearestIndex, maxIndex());
    updateButtons();
  }

  function snapToIndex(nextIndex) {
    currentIndex = wrapIndex(nextIndex);
    const targetCard = cardElements[currentIndex];

    if (targetCard) {
      windowEl.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth",
      });
    }

    updateButtons();
  }

  sidePrevButton.addEventListener("click", () => {
    snapToIndex(currentIndex - 1);
  });

  sideNextButton.addEventListener("click", () => {
    snapToIndex(currentIndex + 1);
  });

  if (mobilePrevButton) {
    mobilePrevButton.addEventListener("click", () => {
      snapToIndex(currentIndex - 1);
    });
  }

  if (mobileNextButton) {
    mobileNextButton.addEventListener("click", () => {
      snapToIndex(currentIndex + 1);
    });
  }

  windowEl.addEventListener("scroll", () => {
    window.requestAnimationFrame(syncIndexFromScroll);
  });

  windowEl.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isPointerDown = true;
    isDragging = false;
    dragStartX = event.clientX;
    dragStartScrollLeft = windowEl.scrollLeft;
  });

  windowEl.addEventListener("pointermove", (event) => {
    if (!isPointerDown) {
      return;
    }

    const deltaX = event.clientX - dragStartX;

    if (!isDragging && Math.abs(deltaX) > 6) {
      isDragging = true;
      windowEl.classList.add("is-dragging");
    }

    if (!isDragging) {
      return;
    }

    windowEl.scrollLeft = dragStartScrollLeft - deltaX;
  });

  function endDrag() {
    if (!isPointerDown) {
      return;
    }

    isPointerDown = false;

    if (!isDragging) {
      return;
    }

    isDragging = false;
    windowEl.classList.remove("is-dragging");
    syncIndexFromScroll();
    snapToIndex(currentIndex);
  }

  windowEl.addEventListener("pointerup", endDrag);
  windowEl.addEventListener("pointercancel", endDrag);
  windowEl.addEventListener("pointerleave", endDrag);

  window.addEventListener("resize", () => {
    currentIndex = Math.min(currentIndex, maxIndex());
    snapToIndex(currentIndex);
  });

  updateButtons();
}
