const projectsRoot = document.getElementById("projects-root");

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderPaper(paper) {
  const authors = paper.authors?.length
    ? escapeHtml(paper.authors.join(", "))
    : "Unavailable";
  const venue = escapeHtml(paper.venue || "Unspecified venue");
  const summary = escapeHtml(paper.summary || "");
  const abstract = escapeHtml(paper.abstract || "Abstract unavailable.");
  const title = escapeHtml(paper.title);
  const paperUrl = escapeHtml(paper.paperUrl);

  return `
    <details class="project-paper-card">
      <summary class="project-paper-summary">
        <span class="project-paper-copy">
          <span class="paper-chipline">
            <span class="publication-year">${paper.year}</span>
            <span class="paper-venue-chip">${venue}</span>
          </span>
          <span class="project-paper-title">${title}</span>
          <span class="project-paper-text">${summary}</span>
        </span>
        <span class="project-paper-toggle" aria-hidden="true"></span>
      </summary>
      <div class="project-paper-body">
        <p><strong>Authors.</strong> ${authors}</p>
        <p><strong>Venue.</strong> ${venue}</p>
        <p><strong>Abstract.</strong> ${abstract}</p>
        <p class="project-paper-link">
          <a href="${paperUrl}" target="_blank" rel="noreferrer">Open paper</a>
        </p>
      </div>
    </details>
  `;
}

function renderProject(project) {
  const bullets = (project.bullets || [])
    .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
    .join("");
  const papers = (project.papers || []).map(renderPaper).join("");

  return `
    <article class="subsection project-section" id="${escapeHtml(project.id)}">
      <div class="project-header">
        <h2>${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.description)}</p>
        <ul class="summary-list">${bullets}</ul>
      </div>
      <div class="project-paper-window" aria-label="${escapeHtml(project.title)} papers">
        ${papers}
      </div>
    </article>
  `;
}

function revealProjectCard(card) {
  const container = card.closest(".project-paper-window");
  if (!container) {
    return;
  }

  const cardTop = card.offsetTop;
  const cardBottom = cardTop + card.offsetHeight;
  const viewTop = container.scrollTop;
  const viewBottom = viewTop + container.clientHeight;

  if (cardTop < viewTop || cardBottom > viewBottom) {
    container.scrollTo({
      top: Math.max(0, cardTop - 12),
      behavior: "smooth",
    });
  }
}

function wireProjectCards() {
  document.querySelectorAll(".project-paper-window").forEach((container) => {
    container.querySelectorAll(".project-paper-card").forEach((card) => {
      card.addEventListener("toggle", () => {
        if (!card.open) {
          return;
        }

        container.querySelectorAll(".project-paper-card[open]").forEach((openCard) => {
          if (openCard !== card) {
            openCard.open = false;
          }
        });

        requestAnimationFrame(() => {
          revealProjectCard(card);
        });
      });
    });
  });
}

function loadProjects() {
  const data = window.PROJECTS_DATA;
  if (!Array.isArray(data)) {
    projectsRoot.innerHTML = `
      <div class="panel projects-loading">
        Unable to load the project map right now.
      </div>
    `;
    return;
  }
  projectsRoot.innerHTML = data.map(renderProject).join("");
  wireProjectCards();
}

loadProjects();
