<script lang="ts">
import { steps } from '@/mocks/purchase-steps'
import { ref } from 'vue'
import IconCart from '@icons/IconCart.vue'
import IconForm from '@icons/IconForm.vue'
import IconMoney from '@icons/IconMoney.vue'
import ItemsStep from './ItemsStep.vue'
import FormStep from './FormStep.vue'
import PaymentStep from './PaymentStep.vue'

export default {
  components: {
    FormStep,
    IconCart,
    IconForm,
    IconMoney,
    ItemsStep,
    PaymentStep
  },
  setup() {
    const mainHeaderTitle = 'Finalize a sua compra'
    const currentStep = ref('items')
    return {
      currentStep,
      mainHeaderTitle,
      steps
    }
  },
  methods: {
    changeStep(stepId: string) {
      this.currentStep = stepId
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
        :class="{ current: step.id === currentStep }"
        v-for="(step, index) in steps"
        v-bind:key="index"
        @click="changeStep(step.id)"
      >
        <div class="step-index">
          <IconCart v-if="isItemsStep(step.id)" :color="'--black'" />
          <IconForm v-if="isFormStep(step.id)" />
          <IconMoney v-if="isPaymentStep(step.id)" />
          {{ step.title }}
        </div>
      </div>
    </div>
    <div class="current-step-content">
      <ItemsStep v-if="isItemsStep(currentStep)" />
      <FormStep v-if="isFormStep(currentStep)" />
      <PaymentStep v-if="isPaymentStep(currentStep)" />
    </div>
  </div>
</template>

<style lang="scss">
.purchase-container {
  h2 {
    margin-bottom: 10px;
  }

  .steps {
    display: flex;
    align-items: center;
    text-align: center;

    .step-container {
      height: 60px;
      width: 100%;
      cursor: pointer;
      display: flex;
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
