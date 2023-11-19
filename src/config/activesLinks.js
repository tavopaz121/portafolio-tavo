export function handleLinkClick(link, setActiveLink) {
  setActiveLink(link);
  const section = document.getElementById(link);
  const offset = section.offsetTop;
  const headerHeight = document.querySelector("header").offsetHeight;
  const scrollPosition = offset - headerHeight;
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}
