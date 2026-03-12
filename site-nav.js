document.querySelectorAll(".site-header").forEach((header, index) => {
  const nav = header.querySelector(".site-nav");

  if (!nav) {
    return;
  }

  const navId = nav.id || `site-nav-${index + 1}`;
  nav.id = navId;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "site-nav-toggle";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", navId);
  button.setAttribute("aria-label", "Toggle site navigation");
  button.innerHTML = `
    <span class="site-nav-toggle-icon" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <span class="site-nav-toggle-label">Menu</span>
  `;

  header.appendChild(button);

  function closeNav() {
    nav.classList.remove("is-open");
    button.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("has-open-nav");
  }

  function openNav() {
    nav.classList.add("is-open");
    button.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    document.body.classList.add("has-open-nav");
  }

  button.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeNav();
      return;
    }

    openNav();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 640) {
      return;
    }

    if (!nav.classList.contains("is-open")) {
      return;
    }

    if (header.contains(event.target)) {
      return;
    }

    closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      closeNav();
    }
  });
});
