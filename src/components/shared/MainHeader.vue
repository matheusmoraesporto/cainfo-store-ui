<template>
  <header>
    <RouterLink class="container" to="/">
      <img class="logo cainfo-logo" src="@assets/cainfo-logo.jpg" />
      <img class="logo unisinos-logo" src="@assets/unisinos-logo.png" />
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }

  .container {
    display: flex;
    align-items: center;

    .logo {
      margin: 10px;
    }

    .cainfo-logo {
      width: 45px;
      height: 45px;
    }

    .unisinos-logo {
      width: 96px;
      height: 25px;
    }
  }
}
</style>
