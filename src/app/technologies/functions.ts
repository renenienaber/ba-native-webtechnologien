export function isObjectInHtmlElement(htmlElement: string, object: string): boolean {
  const el = document.createElement(htmlElement);
  return object in el;
}
