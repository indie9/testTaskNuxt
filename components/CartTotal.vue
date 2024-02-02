<template>
    <article class="total">
        <header class="total__header">
            <h3 class="total__header-title">Итого</h3>
        </header>
        <section class="total__content">
            <div class="total__content-item">
                <div class="label">Сумма заказа</div>
                <div class="value">{{ cartItemPrice?.toLocaleString() + " ₽" }}</div>
            </div>
            <div class="total__content-item">
                <span class="label">Количество</span>
                <span class="value">{{ cartItemCount + " шт" }}</span>
            </div>
            <div class="total__content-item">
                <span class="label">Установка</span>
                <span class="value">{{
                    cartItemCount && cartStore.state.needInstall ? "1 000 ₽ " : "Нет"
                }}</span>
            </div>
            <hr class="total__separator" />
            <div class="total__price">
                <span class="label">Стоимость товаров</span>
                <span class="value">{{ totalPrice?.toLocaleString() + " ₽" }} </span>
            </div>
        </section>
        <section class="total__buttons">
            <button class="btn total__buttons-primary" @click="sendOrder">
                Оформить заказ
            </button>
            <button class="btn total__buttons-secondary">Купить в 1 клик</button>
        </section>
    </article>
</template>

<script setup>
import { computed, inject } from "vue";

const cartStore = inject("cartStore");

const cartItemCount = computed(() => {
    return cartStore.getCartItemCount.value;
});
const cartItemPrice = computed(() => {
    return cartStore.getCartItemPrice.value;
});

const totalPrice = computed(() => {
    return (
        cartStore.getCartItemPrice.value +
        (cartStore.getCartItemCount.value && cartStore.state.needInstall ? 1000 : 0)
    );
});

const sendOrder = async () => {
    const data = {
        items: cartStore.state.items.map((x) => {
            return { [x.article]: x.quantity };
        }),
        needInstall: cartStore.state.needInstall,
    };
    try {
        const { response, error } = await useFetch("https://example.com/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
</script>

<style lang="scss" scoped>
.total {
    background-color: #f6f8fa;
    padding: 35px 30px;
    width: 365px;
    height: 388px;

    &__header {
        margin-bottom: 31px;

        &-title {
            font-size: 24px;
        }
    }

    &__content {
        width: 100%;

        &-item {
            display: flex;
            margin-bottom: 26px;

            & .label {
                font-size: 16px;
            }

            & .value {
                font-size: 16px;
                margin-left: auto;
            }
        }
    }

    &__separator {
        margin-top: 28px;
        border-top: 1px solid #aeb0b6;
    }

    &__price {
        margin-top: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 17px;

        & .label {
            font-size: 18px;
        }

        & .value {
            font-weight: 700;
            font-size: 26px;
            margin-left: auto;
        }
    }

    &__buttons {
        margin-top: 32px;
        display: flex;
        flex-direction: column;

        & .btn {
            cursor: pointer;
            width: 100%;
            height: 54px;
            border-radius: 4px;
            border: 1px solid #0069b4;
            font-size: 18px;
        }

        &-primary {
            background-color: #0069b4;
            color: #ffffff;
            margin-bottom: 12px;
        }

        &-secondary {
            border: 1px solid #0069b4;
            background-color: #ffffff;
            color: #0069b4;
        }
    }
}
</style>
