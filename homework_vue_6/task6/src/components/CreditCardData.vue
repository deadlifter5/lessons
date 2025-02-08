<template>
  <div class="container">
    <div class="form-container">
      <div class="card-num">
        <label>
          CARD NUMBER <br />
          <input
            class="input-card-num"
            type="text"
            v-model="cardNumberVal"
            maxlength="19"
          />
        </label>
      </div>
      <div class="expiry-date">
        <label>
          EXPIRY DATE <br />
          <input
            class="input-expiry-date"
            type="text"
            maxlength="5"
            placeholder=" MM / YY "
            v-model="expiryDateVal"
          />
        </label>
        <label>
          SECURE CODE <br />
          <input
            class="input-expiry-date"
            type="text"
            maxlength="3"
            placeholder=" *  *  * "
            v-model="secureCodeVal"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCardData",
  props: {
    cardNumber: { type: String, default: null },
    expiryDate: { type: String, default: null },
    secureCode: { type: String, default: null },
    cardNumberModifiers: { default: () => ({}) },
  },
  computed: {
    cardNumberVal: {
      get() {
        return this.cardNumber
      },
      set(newVal) {
        if (this.cardNumberModifiers.separateDigits) {
          newVal = newVal.replace(/(\d{4}(?=\S+))/g, "$1 ")
        }

        this.$emit("update:cardNumber", newVal)
      },
    },
    expiryDateVal: {
      get() {
        return this.expiryDate
      },
      set(newVal) {
        if (newVal.length === 2) newVal += "/"

        this.$emit("update:expiryDate", newVal)
      },
    },
    secureCodeVal: {
      get() {
        return this.secureCode
      },
      set(newVal) {
        this.$emit("update:secureCode", newVal)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(237, 237, 237);
  width: 320px;
  height: 150px;
}
.card-num {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
    width: 50px;
    height: 50px;
    background: url("https://cdn.iconscout.com/icon/free/png-256/free-visa-icon-download-in-svg-png-gif-file-formats--credit-debit-bank-transaction-card-payment-methods-vol-1-pack-business-icons-32265.png?f=webp&w=256")
      no-repeat;
    background-size: cover;
  }
  input {
    width: 90%;
    height: 25px;
  }
}

.form-container {
  width: 300px;
  padding-left: 10px;

  input {
    border-radius: 5px;
  }

  .input-card-num {
    min-width: 277px;
    margin-bottom: 15px;
    background-color: rgb(237, 237, 204);
    font-size: 16px;
    padding: 10px;
  }
  .input-expiry-date {
    width: 120px;
    font-size: 16px;
    padding: 10px;
    text-align: center;
  }
  .expiry-date {
    display: flex;

    justify-content: space-between;
  }
}
</style>
