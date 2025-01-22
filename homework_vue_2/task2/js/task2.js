const { createApp } = Vue

const wordsList = [
  {
    id: 1,
    engWord: "apple",
    ukrWord: "яблуко",
    img: "https://www.applesfromny.com/wp-content/uploads/2020/05/Fortune_NYAS-Apples2.png",
  },
  {
    id: 2,
    engWord: "cherry",
    ukrWord: "вишня",
    img: "https://media.istockphoto.com/id/506627545/es/foto/cherry-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=fc5X2eC0YMHHIUPhK5rX13vJCYi2FRYrHAaz7OMyPjE=",
  },
  {
    id: 3,
    engWord: "pear",
    ukrWord: "груша",
    img: "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22476/pears_commodity-page.png",
  },
]

createApp({
  data() {
    return {
      userAnswer: null,
      result: null,
      answerColor: null,
      ind: this.getRandomWord(),
    }
  },
  methods: {
    getRandomWord() {
      return Math.floor(Math.random() * wordsList.length)
    },
    checkAnswer() {
      if (this.userAnswer === this.ukrWord) {
        this.result = "Добре. Молодець!"
        this.answerColor = "right-answer"
      } else {
        this.result = "Невірно, спробуйте ще раз"
        this.answerColor = "wrong-answer"
      }
    },
  },

  computed: {
    img() {
      return wordsList[this.ind].img
    },
    engWord() {
      return wordsList[this.ind].engWord
    },
    ukrWord() {
      return wordsList[this.ind].ukrWord
    },
  },
}).mount("#app")
