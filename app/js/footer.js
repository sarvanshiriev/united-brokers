let isMobile = null;

function toggleFooter(title) {
  const block = title.nextElementSibling;

  document.querySelectorAll(".footer__list-block").forEach((otherBlock) => {
    if (otherBlock !== block) {
      otherBlock.style.display = "none";
    }
  });

  block.style.display = block.style.display === "block" ? "none" : "block";
}

function initMobileFooterToggle() {
  const isCurrentlyMobile = window.innerWidth < 768;

  if (isCurrentlyMobile === isMobile) return;

  isMobile = isCurrentlyMobile;

  document.querySelectorAll(".footer__list-title").forEach((title) => {
    const newTitle = title.cloneNode(true);
    title.parentNode.replaceChild(newTitle, title);
  });

  if (isMobile) {
    document.querySelectorAll(".footer__list-title").forEach((title) => {
      title.addEventListener("click", () => toggleFooter(title));
    });

    document.querySelectorAll(".footer__list-block").forEach((block) => {
      block.style.display = "none";
    });
  } else {
    document.querySelectorAll(".footer__list-block").forEach((block) => {
      block.style.display = "block";
    });
  }
}

document.addEventListener("DOMContentLoaded", initMobileFooterToggle);
window.addEventListener("resize", initMobileFooterToggle);
