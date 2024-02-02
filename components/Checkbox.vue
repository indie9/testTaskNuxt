<template>
  <div class="checkbox" @click="toggleCheckbox">
    <input class="checkbox__input" type="checkbox" v-model="isChecked">
    <span class="checkbox__custom"></span>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['update:modelValue'])
const isChecked = ref(props.modelValue);

const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
  emit('update:modelValue', isChecked.value);
};



</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__input {
    display: none;

    &+.checkbox__custom:after {
      display: none;
    }

    &:checked+.checkbox__custom {
      background-color: #4285f4;

      &:after {
        display: block;
      }
    }
  }


  &__custom {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #797B86;
    border-radius: 2px;
    margin-right: 8px;
    background-color: white;

    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: 0px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked~.checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {

  left: 1px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}</style>
