export function isObjectInHtmlElement(htmlElement: string, object: string): boolean {
  const el = document.createElement(htmlElement);
  return object in el;
}

export function isObjectInUIEvent(object: string): boolean {
  const ev = new UIEvent('TestEvent', {});
  return object in ev;
}

export function isObjectInServiceWorkerRegistration(object: string): boolean {
  return 'ServiceWorkerRegistration' in window && object in ServiceWorkerRegistration.prototype;
}
