import { reactive, readonly,computed  } from 'vue';

export default function() {
  const state = reactive({
    items: [
      {
    
        image: '/oneitem.png',
        article: 'G2H1069',
        name: 'Вытяжное устройство G2H',
        descriprion: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        price: 12644,
        quantity: 2
    
      },
      {
    
        image: '/twoitem.png',
        article: 'G2H1065',
        name: 'Вытяжное устройство BXC',
        descriprion: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        price: 17643,
        quantity: 4
    
      },
      {
    
        image: '/threeitem.png',
        article: 'G2H1064',
        name: 'Вытяжное устройство GHN',
        descriprion: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        price: 8597,
        quantity: 1
    
      }

    ],
    needInstall: false
  });

  const changeQuantity = (article,quantity) => {
    const index = state.items.findIndex(x => x.article == article);
    if (!!~index) {
      state.items[index].quantity = quantity
    }
  };
  const eraseCaert = () => {
    state.items.splice(0, state.items.length);
  };

  const toggleNeedInstall = () => {
    state.needInstall = !state.needInstall
  }
  const removeFromCart = (article) => {
    const index = state.items.findIndex(x => x.article == article);
    if (!!~index) {
      state.items.splice(index, 1);
    }
  };

  const getCartItemCount = computed(() => {
    return state.items.reduce((acc, curr) =>  acc + curr.quantity, 0);
  });

  const getCartItemPrice = computed(() => {
    return state.items.reduce((acc, curr) =>  acc + curr.quantity * curr.price, 0);
  });

  return {
    state: readonly(state),
    changeQuantity,
    removeFromCart,
    toggleNeedInstall,
    eraseCaert,
    getCartItemPrice,
    getCartItemCount,
  };
}