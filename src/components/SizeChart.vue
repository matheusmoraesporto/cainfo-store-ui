<script lang="ts">
import type { DTOSize } from '@models/size'

export default {
  props: {
    sizes: Object as () => DTOSize[]
  },
  setup(props) {
    const hasSleeve = props.sizes?.some((s) => s.sleeve)
    return {
      hasSleeve,
      lengthTitle: 'Comprimento',
      sizeTitle: 'Tamanho',
      sleeveTitle: 'Manga',
      title: 'Tabela de medidas:',
      widthTitle: 'Largura'
    }
  }
}
</script>

<template>
  <div class="size-chart-container">
    <span>{{ title }}</span>
    <table>
      <tr>
        <th class="black-cell">{{ sizeTitle }}</th>
        <th class="black-cell">{{ lengthTitle }}</th>
        <th class="black-cell">{{ widthTitle }}</th>
        <th class="black-cell" v-if="hasSleeve">{{ sleeveTitle }}</th>
      </tr>
      <tr v-for="(size, index) in sizes" v-bind:key="index">
        <td class="black-cell">{{ size.acronym }}</td>
        <td class="white-cell">{{ size.length }}cm</td>
        <td class="white-cell">{{ size.width }}cm</td>
        <td v-if="hasSleeve" class="white-cell">{{ size.sleeve }}cm</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
.size-chart-container {
  span {
    font-size: 18px;
  }

  table {
    width: 100%;
    background-color: var(--dark-grey);
    text-align: center;
  }
}

.black-cell {
  background-color: var(--black);
  color: var(--yellow);
}

.white-cell {
  background-color: var(--white);
}
</style>
