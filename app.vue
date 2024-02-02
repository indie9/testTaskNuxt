<template>
    <main class="main">
        <nav class="navigation">
            <CartNavigation />
        </nav>

        <Cart />
    </main>
</template>
<script setup>
import { provide } from "vue";
import useCartStore from "~/store/cart";
import useSlidereStore from "~/store/slider";

const cartStore = useCartStore();
provide("cartStore", cartStore);
const sliderStore = useSlidereStore();
provide("sliderStore", sliderStore);

const num_word = (value, words) => {
    value = Math.abs(value) % 100;
    let num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
};
provide("num_word", num_word);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
.main {
    max-width: 1280px;
    margin: 0 auto;
}
.navigation {
    & .navcart {
        margin-left: auto;
        height: 140px;
    }
}

* {
    font-family: "Lato", sans-serif;
    outline: 0;
    padding: 0;
    margin: 0;
    border: 0;
    color: #1f2432;
    font-size: 14px;
}
</style>
