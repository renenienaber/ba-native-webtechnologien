export function isObjectInHtmlElement(htmlElement: string, object: string): boolean {
  const el = document.createElement(htmlElement);
  return object in el;
}

export function isObjectInUIEvent(object: string): boolean {
  const ev = new UIEvent('TestEvent', {});
  return object in ev;
}

export function isObjectInServiceWorkerRegistration(object: string): boolean {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(
      serviceWorkerRegistration => {
        console.log(serviceWorkerRegistration);
        if (object in serviceWorkerRegistration) {
          return true;
        }
      }
    );
  }
  return false;
}
