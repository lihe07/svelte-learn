import { readable } from "svelte/store";

export const my_store = readable(114514, set => {
    // console.log(my_store);
    const itv = setInterval(() => {
        set($my_store === 114514 ? 1919810 : 114514);
    }, 1000);
    return () => clearInterval(itv);
})