import { writable, derived, readable } from 'svelte/store';

let s = 0;

export const time = readable(s, set => {
  const interval = setInterval(() => {
    s++;
    set(s);
    console.log('intervale');
  }, 1000);

  return () => clearInterval(interval);
});

export const timeInMs = derived(time, $time => $time * 1000);

function createStore(init) {
  const { set, subscribe, update } = writable(init);

  return {
    subscribe: subscribe,
    set: set,
    toUppercase: () => update(n => n.toUpperCase()),
    toLowercase: () => update(n => n.toLowerCase()),
    reset: () => set(''),
  };
}

export const name = createStore('Romain');
export const surname = createStore('DSdaDS');
