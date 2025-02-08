<template>
  <credit-card-data
    v-model:cardNumber.separateDigits="userCreditCard"
    v-model:expiryDate="userExpiryDate"
    v-model:secureCode="userSecureCode"
  />
</template>

<script>
import CreditCardData from "@/components/CreditCardData.vue"

export default {
  name: "App",
  components: {
    CreditCardData,
  },
  data() {
    return {
      userCreditCard: null,
      userExpiryDate: null,
      userSecureCode: null,
    }
  },
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
