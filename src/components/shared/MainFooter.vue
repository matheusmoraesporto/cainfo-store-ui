<script setup lang="ts">
import IconInstagram from '@icons/IconInstagram.vue'
import IconEmail from '@icons/IconEmail.vue'
import contact from '@/mocks/contact'
</script>

<template>
  <footer>
    <RouterLink class="header" to="/">
      <img class="cainfo-logo" src="@assets/cainfo-logo.jpg" />
      CAINFO - Unisinos
    </RouterLink>

    <div class="container">
      <div class="contact">
        <IconEmail />
        <span>{{ contact.email }}</span>
      </div>

      <a class="contact" :href="contact.instagram.url" target="_blank">
        <IconInstagram />
        <span>@{{ contact.instagram.username }}</span>
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #000;
  position: absolute;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;

  .header {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;

    .cainfo-logo {
      width: 30px;
      height: 30px;
      margin: 10px;
    }
  }

  .container {
    margin: 20px 0 10px 0;
    font-size: 12px;
    color: #919191;
    display: flex;
    flex-direction: row;
    gap: 20px;

    a {
      color: #919191;
      text-decoration: none;
    }

    .contact {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
  }
}
</style>
