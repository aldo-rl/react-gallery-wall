export const setTranslate = (elements, translateX) => {
  elements.forEach(el => {
    el.current.style.transform = `translateX(${translateX}px)`
  });
}
