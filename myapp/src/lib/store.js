import { writable } from 'svelte/store';

const { subscribe, set, update } = writable('');

export const text = {
  subscribe,
  set,
  toLowerCase: () => update(t => t.toLowerCase()),
  toUpperCase: () => update(t => t.toUpperCase()),
  reset: () => set(''),
};
