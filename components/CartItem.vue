<template>
    <article class="product">
        <figure class="product__image">
            <img :src="product.image" alt="Product Image" />
        </figure>
        <section class="product__info">
            <h2 class="product__info-title">{{ product.name }}</h2>

            <p class="product__info-description">{{ product.descriprion }}</p>
            <p class="product__info-article">Артикул: {{ product.article }}</p>
        </section>
        <section class="product__actions">
            <div class="product__actions-buttons">
                <button @click="decreaseQuantity" class="btn left">-</button>

                <p class="btn center">{{ product.quantity }}</p>

                <button @click="increaseQuantity" class="btn right">+</button>
            </div>

            <div v-if="product.quantity > 1" class="product__actions-price">
                {{ product.price?.toLocaleString() + " ₽/шт." }}
            </div>
        </section>
        <section class="product__price">
            {{ totalPrice?.toLocaleString() + " ₽" }}
        </section>
        <section class="product__delete">
            <button @click="removeProduct" class="product__delete-btn">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5" />
                    <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5" />
                </svg>
            </button>
        </section>
    </article>
</template>

<script setup>
import { ref, computed, defineEmits, inject } from "vue";

const cartStore = inject("cartStore");

const props = defineProps({
    product: Object,
});

const product = props.product;

const totalPrice = computed(() => {
    return product.price * product.quantity;
});

const increaseQuantity = () => {
    cartStore.changeQuantity(product.article, ++product.quantity);
};

const decreaseQuantity = () => {
    if (product.quantity > 0) {
        cartStore.changeQuantity(product.article, --product.quantity);
    }
};

const removeProduct = () => {
    cartStore.removeFromCart(product.article);
};
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    width: 100%;
    height: 120px;

    &__image {
        margin-right: 30px;

        & img {
            width: 100px;
            height: 100px;
        }
    }

    &__info {
        width: 100%;

        &-title {
            font-size: 16px;
            margin-bottom: 8px;
        }

        &-description {
            color: #2c3242;
            font-size: 12px;
            margin-bottom: 8px;
            max-width: 263px;
        }

        &-article {
            color: #797b86;
        }
    }

    &__actions {
        width: 160px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        &-buttons {
            margin-top: 50px;
            display: flex;
            align-items: center;
        }
        & .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            background-color: #f6f8fa;

            &.center {
                margin: 0 2px;
            }

            &.left {
                margin: 0 2px;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                cursor: pointer;
            }

            &.right {
                margin: 0 2px;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                cursor: pointer;
            }
        }

        &-price {
            margin-top: 8px;
            font-size: 12px;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: center;
        }
    }

    &__price {
        width: 150px;
        margin: 0 35px 0 80px;
        font-size: 18px;
        white-space: nowrap;
    }

    &__delete {
        display: flex;
        align-items: flex-start;
        height: 100%;

        &-btn {
            background: none;
            cursor: pointer;
        }
    }
}

.product-details {
    margin-right: 20px;
}

.product-actions {
    display: flex;
    align-items: center;
}

.product-actions button {
    margin-right: 5px;
}
</style>
