import { reactive, readonly,computed  } from 'vue';

export default function() {
  const state = reactive({
    items: [
      {
        image: '/oneitem.png',
        article: 'G2H1069',
        name: 'BXC',
        descriprion: 'Вытяжное устройство для механической системы вентиляции',
        price: {
          min: 6843,
          max: 56723,
        },
      },
      {
    
        image: '/twoitem.png',
        article: 'G2H1065',
        name: 'BXC',
        descriprion: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        price: {
          min: 6843,
          max: 56723,
        },
    
      },
      {
    
        image: '/threeitem.png',
        article: 'G2H1064',
        name: 'GHN',
        descriprion: 'Вытяжное устройство с датчиком присутствия',
        price: {
          min: 6843,
          max: 56723,
        },
    
      },
      {
    
        image: '/threeitem.png',
        article: 'G2H1124',
        name: 'TDA',
        descriprion: 'Вытяжное устройство с датчиком присутствия',
        price: {
          min: 6843,
          max: 56723,
        },
      }

    ],
    exchange: 91.42
  });


  return {
    state: readonly(state),
  };
}