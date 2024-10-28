class MultChecker {
  constructor(number1, correctAnsNum = 0, wrongAnsNum = 0) {
    this.number1 = number1
    this.correctAnsNum = correctAnsNum
    this.wrongAnsNum = wrongAnsNum
  }
  getRandomNumber2() {
    return 1 + Math.floor(Math.random() * 9)
  }
  userAnswer() {
    let randNum2 = this.getRandomNumber2()
    let answer = parseInt(
      prompt(`Answer the question: ${this.number1} * ${randNum2}? `)
    )
    let correctAns = this.number1 * randNum2
    return { answer, correctAns }
  }
  getChecked() {
    for (let i = 0; i < 5; i++) {
      let { answer, correctAns } = this.userAnswer()
      if (answer === correctAns) {
        this.correctAnsNum++
        alert("Correct!")
      } else {
        alert("Wrong!")
        this.wrongAnsNum++
      }
    }
    return `Correct answers: ${this.correctAnsNum}<br> Wrong answers: ${this.wrongAnsNum}`
  }
}
const userNumber = parseInt(prompt("Choose a number (1 to 9)"))
const multChecker = new MultChecker(userNumber)
document.write(multChecker.getChecked())
