<script lang="ts">
export default {
  props: {
    message: String
  }
}
</script>

<template>
  <div class="toast-container">
    {{ message }}
  </div>
</template>

<style lang="scss">
.toast-container {
  background-color: var(--yellow);
  color: var(--black);
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  position: absolute;
  top: 60px;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);

  @media (max-width: 770px) {
    width: 80%;
  }
}
</style>
