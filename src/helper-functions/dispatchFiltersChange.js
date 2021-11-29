export function dispatchChangeEvent() {
  const event = new Event("filters-change");
  document.dispatchEvent(event);
}
