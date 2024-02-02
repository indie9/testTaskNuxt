<template>
    <article class="wrapper">
        <header class="header">Просмотренные товары</header>

        <Swiper
            class="slider"
            @slideChange="slideChange"
            :height="400"
            :modules="[
                SwiperAutoplay,
                SwiperEffectCreative,
                SwiperController,
                SwiperPagination,
            ]"
            :slides-per-view="1"
            :loop="false"
            :effect="'creative'"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }"
            :controller="{
                inverse: true,
            }"
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
        >
            <SwiperControls :activeIndex="state.activeIndex" :total="items.length" />
            <SwiperSlide v-for="(slide, idx) in items" :key="idx">
                <div class="slide-wrapper">
                    <SliderItem
                        v-for="(item, index) in slide"
                        :product="item"
                        :key="item.article"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    </article>
</template>

<script setup>
import { ref, nextTick, reactive, computed } from "vue";

const sliderStore = inject("sliderStore");
const sliderItems = reactive(sliderStore.state.items);
let items = [];
for (let i = 0; i < 5; i++) {
    items.push(sliderItems);
}

const state = reactive({
    activeIndex: 1,
});
const slideChange = (e) => {
    state.activeIndex = e.activeIndex + 1;
};
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    margin-top: 95px;

    & .header {
        position: absolute;
        top: 5px;
        font-size: 30px;
        height: 100px;
    }

    & .slider {
        padding-top: 100px;
    }

    .slide-wrapper {
        display: flex;
        background-color: white;
        justify-content: space-between;

        & .product:not(:last-child) {
            margin-right: 20px;
            flex-grow: 1;
            flex-basis: 0;
        }
    }
}
</style>
