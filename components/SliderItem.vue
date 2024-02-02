<template>
    <div class="product">
        <div class="product__image">
            <img :src="product.image" alt="Product Image" />
        </div>
        <div class="product__info">
            <h2 class="product__info-title">{{ product.name }}</h2>

            <p class="product__info-descriprion">{{ product.descriprion }}</p>
            <p class="product__info-price">{{ itemPrice }}</p>
            <p class="product__info-price--exchange">{{ itemPriceExcahnge }}</p>
        </div>
        <div class="product__actions">
            <button class="product__actions-btn">Подробнее</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineEmits, inject } from "vue";

const sliderStore = inject("sliderStore");

const exchange = sliderStore.state.exchange;
const props = defineProps({
    product: Object,
});

const product = props.product;

const itemPrice = computed(() => {
    return product.price.min + " ₽" + " – " + product.price.max + " ₽";
});

const itemPriceExcahnge = computed(() => {
    return (
        (product.price.min / exchange).toFixed(2) +
        " €" +
        " – " +
        (product.price.max / exchange).toFixed(2) +
        " €"
    );
});
</script>

<style lang="scss" scoped>
.product {
    max-width: 305px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background: #f6f8fa;

    &__image {
    }

    &__info {
        &-title {
            font-size: 22px;
            margin-bottom: 10px;
        }

        &-descriprion {
        }

        &-price {
            font-size: 22px;
            margin-bottom: 10px;
            margin-top: 60px;
            font-weight: 500;
            &--exchange {
                color: #797b86;
                font-size: 16px;
                font-weight: 400;
            }
        }
    }

    &__actions {
        margin-top: 20px;
        width: 100%;

        &-btn {
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            height: 54px;
            border-radius: 4px;
            background-color: #0069b4;
            color: #ffffff;
            margin-bottom: 12px;
        }
    }
}
</style>
