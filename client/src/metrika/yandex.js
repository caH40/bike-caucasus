const counterYandex = 88492388;

export function sendMetrika(type, value) {
  window.ym(counterYandex, type, value);
}
