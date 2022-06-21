import { readable, writable } from 'svelte/store';

export const headerHeight = writable(0);

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
export const reducedMotion = readable(false, function start(set) {
    mediaQuery.addEventListener('change', () => {
        set(mediaQuery.matches);
    });

});
