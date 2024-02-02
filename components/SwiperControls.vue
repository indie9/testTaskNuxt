<template>
    <div class="paging__wrapper">
        <button @click="swiper.slidePrev()" class="btn prev">
            <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9 19L1 10L9 0.999999"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
        <p class="paging">
            <span class="paging-big">
                {{ props.activeIndex }}
            </span>
            <span class="paging-medium">
                {{ " / " + total }}
            </span>
        </p>

        <button @click="swiper.slideNext()" class="btn next">
            <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="next__icon"
            >
                <path
                    d="M9 19L1 10L9 0.999999"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    </div>
</template>
<script setup>
import { computed } from "vue";
const swiper = useSwiper();
const props = defineProps({
    activeIndex: Number,
    total: Number,
});
</script>
<style lang="scss" scoped>
.paging__wrapper {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
    right: 50px;

    & .btn {
        cursor: pointer;
        background-color: #90a2b5;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    & .paging {
        margin: 0 20px;
        &-big {
            font-size: 24px;
        }
        &-medium {
            font-size: 18px;
            color: #797b86;
        }
    }

    & .next {
        &__icon {
            rotate: 180deg;
        }
    }
}
</style>
