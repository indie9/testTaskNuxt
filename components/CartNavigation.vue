<template>
  <article class="navcart">
    <section class="navcart__icon">
      <img src="/cart.png" alt="Product Image" width="32" height="32">
    </section>
    <section class="navcart__info">
      <p class="navcart__info-title"> Ваша корзина </p>
      <p class="navcart__info-count"> {{ cartItemCount }} </p>
      <p class="navcart__info-price"> {{ totalPrice?.toLocaleString() + ' ₽' }}</p>
    </section>
  </article>
</template>

<script setup>
import { ref, computed, defineEmits, inject } from 'vue';

const num_word = inject('num_word');
const cartStore = inject('cartStore');

const cartItemCount = computed(() => {
  return cartStore.getCartItemCount.value + ' ' + num_word(cartStore.getCartItemCount.value, ['товар', 'товара', 'товаров']);
});
const cartItemPrice = computed(() => {
  return cartStore.getCartItemPrice.value
});

const totalPrice = computed(() => {
  return cartStore.getCartItemPrice.value + (cartStore.state.needInstall ? 1000 : 0)
});


</script>

<style lang="scss" scoped>
.navcart {
  width:132px;
  height: 51px;
  display: flex;
  align-items: center;
  &__info {
    margin-left: 10px;
    &-count {
      font-size: 12px;
      color: #797B86
    }
    &-price {
      font-size: 12px;
    }

  }
}

</style>