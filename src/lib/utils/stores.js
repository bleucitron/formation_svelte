import { writable } from 'svelte/store';

const { subscribe, set, update } = writable('Romain est ici');

export default {
  subscribe,
  set,
  uppercase: () => update(v => v.toUpperCase()),
  lowercase: () => update(v => v.toLowerCase()),
  snakecase: () => update(v => v.split(' ').join('_')),
  reset: () => set(''),
};
