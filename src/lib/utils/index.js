import Pdf from '$lib/Pdf.svelte';
import Jpg from '$lib/Jpg.svelte';
import Png from '$lib/Png.svelte';
import Doc from '$lib/Doc.svelte';
import Gif from '$lib/Gif.svelte';

export const compByExt = {
  pdf: Pdf,
  jpg: Jpg,
  png: Png,
  doc: Doc,
  gif: Gif,
};
