const publicationsRoot = document.getElementById("publications-root");
const publicationsLightbox = document.getElementById("publication-lightbox");
const publicationsLightboxImage = publicationsLightbox?.querySelector("img");
const publicationsLightboxCaption = publicationsLightbox?.querySelector(
  "figcaption"
);
const publicationsLightboxClose = publicationsLightbox?.querySelector(
  ".paper-lightbox-close"
);

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function summarizeAbstract(abstract, venue) {
  if (!abstract) {
    return venue ? `Published in ${venue}.` : "Open to view details.";
  }
  const clean = abstract.replace(/\s+/g, " ").trim();
  if (clean.length <= 180) {
    return clean;
  }
  return `${clean.slice(0, 177).trimEnd()}...`;
}

function renderPreview(paper) {
  if (!paper.previewImage) {
    return `
      <div class="paper-thumb paper-thumb-static">
        <div class="paper-thumb-placeholder">Preview unavailable</div>
      </div>
    `;
  }

  const caption = `${paper.title} first page`;
  return `
    <button
      type="button"
      class="paper-thumb"
      data-lightbox-src="${escapeHtml(paper.previewImage)}"
      data-lightbox-alt="${escapeHtml(paper.title)}"
      data-lightbox-caption="${escapeHtml(caption)}"
    >
      <img
        src="${escapeHtml(paper.previewImage)}"
        alt="${escapeHtml(paper.title)}"
        loading="lazy"
      />
      <span class="paper-thumb-caption">${escapeHtml(caption)}</span>
    </button>
  `;
}

function renderPaper(paper) {
  const authors = paper.authors?.length
    ? escapeHtml(paper.authors.join(", "))
    : "Author list not yet added here.";
  const venue = escapeHtml(paper.venue || "Venue not specified.");
  const summary = escapeHtml(summarizeAbstract(paper.abstract, paper.venue));
  const abstract = escapeHtml(paper.abstract || "Abstract not yet added here.");

  return `
    <details class="paper-card">
      <summary class="paper-card-summary">
        ${renderPreview(paper)}
        <div class="paper-summary-copy">
          <div class="paper-chipline">
            <span class="publication-year">${escapeHtml(paper.year)}</span>
            <span class="paper-venue-chip">${venue}</span>
          </div>
          <h3>${escapeHtml(paper.title)}</h3>
          <p>${summary}</p>
        </div>
        <span class="paper-summary-toggle" aria-hidden="true"></span>
      </summary>
      <div class="paper-card-body">
        <p><strong>Authors.</strong> ${authors}</p>
        <p><strong>Venue.</strong> ${venue}</p>
        <p><strong>Abstract.</strong> ${abstract}</p>
        <p class="paper-card-link">
          <a href="${escapeHtml(paper.link)}" target="_blank" rel="noreferrer">Open paper</a>
        </p>
      </div>
    </details>
  `;
}

function renderCategory(category) {
  const papers = (category.papers || []).map(renderPaper).join("");
  return `
    <section class="publication-category">
      <h2 class="category-heading">${escapeHtml(category.title)}</h2>
      <p class="category-note">${escapeHtml(category.note)}</p>
      <div class="publication-card-stack">
        ${papers}
      </div>
    </section>
  `;
}

function openLightbox(trigger) {
  if (!publicationsLightbox || !publicationsLightboxImage || !publicationsLightboxCaption) {
    return;
  }
  publicationsLightboxImage.src = trigger.dataset.lightboxSrc || "";
  publicationsLightboxImage.alt = trigger.dataset.lightboxAlt || "";
  publicationsLightboxCaption.textContent = trigger.dataset.lightboxCaption || "";
  if (!publicationsLightbox.open) {
    publicationsLightbox.showModal();
  }
}

function loadPublications() {
  const data = window.PUBLICATIONS_DATA;
  if (!Array.isArray(data)) {
    publicationsRoot.innerHTML = `
      <div class="panel projects-loading">
        Unable to load publications right now.
      </div>
    `;
    return;
  }
  publicationsRoot.innerHTML = data.map(renderCategory).join("");
}

document.addEventListener("click", (event) => {
  const thumb = event.target.closest(".paper-thumb");
  if (thumb && thumb.dataset.lightboxSrc) {
    event.preventDefault();
    event.stopPropagation();
    openLightbox(thumb);
    return;
  }

  if (publicationsLightbox?.open && event.target === publicationsLightbox) {
    publicationsLightbox.close();
  }
});

publicationsLightboxClose?.addEventListener("click", () => {
  publicationsLightbox.close();
});

publicationsLightbox?.addEventListener("close", () => {
  if (publicationsLightboxImage) {
    publicationsLightboxImage.src = "";
    publicationsLightboxImage.alt = "";
  }
  if (publicationsLightboxCaption) {
    publicationsLightboxCaption.textContent = "";
  }
});

loadPublications();
