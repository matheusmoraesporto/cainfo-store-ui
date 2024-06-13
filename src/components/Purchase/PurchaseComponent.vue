<script lang="ts">
import { steps } from '@/mocks/purchase-steps'
import { ref } from 'vue'
import IconCart from '@icons/IconCart.vue'
import IconForm from '@icons/IconForm.vue'
import IconMoney from '@icons/IconMoney.vue'

export default {
  components: {
    IconCart,
    IconForm,
    IconMoney
  },
  setup() {
    const mainHeaderTitle = 'Finalize a sua compra'
    const currentStep = ref(0)
    return {
      currentStep,
      mainHeaderTitle,
      steps
    }
  },
  methods: {
    changeStep(index: number) {
      this.currentStep = index
    },
    isItemsStep(stepId: string): boolean {
      return stepId === 'items'
    },
    isFormStep(stepId: string): boolean {
      return stepId === 'form'
    },
    isPaymentStep(stepId: string): boolean {
      return stepId === 'payment'
    }
  }
}
</script>

<template>
  <div class="purchase-container">
    <h2>{{ mainHeaderTitle }}</h2>
    <div class="steps">
      <div
        class="step-container"
        :class="{ current: index === currentStep }"
        v-for="(step, index) in steps"
        v-bind:key="index"
        @click="changeStep(index)"
      >
        <div class="step-index">
          <IconCart v-if="isItemsStep(step.id)" :color="'--black'" />
          <IconForm v-if="isFormStep(step.id)" />
          <IconMoney v-if="isPaymentStep(step.id)" />
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.purchase-container {
  .steps {
    display: flex;
    align-items: center;
    text-align: center;

    .step-container {
      width: 100%;
      cursor: pointer;
      display: flex;
      // flex-direction: column;
      align-items: center;
      padding: 5px 10px 20px 5px;
      border: 1px solid var(--black);

      &.current {
        background-color: var(--yellow);
        border-color: var(--black);

        .step-index {
          font-weight: bold;
        }
      }

      .step-index {
        color: var(--black);
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
}
</style>
