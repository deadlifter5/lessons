let subjectsNumber = parseInt(prompt("Enter number of subjects"))
let studentScores = []
for (let i = 1; i <= subjectsNumber; i++) {
  let studentScore = parseFloat(
    prompt(`Enter score of student Nº${i} (2 to 5)`)
  )
  studentScores.push(studentScore)
}
let studentScoresSum = 0
for (let i = 0; i < studentScores.length; i++) {
  studentScoresSum += studentScores[i]
}
const studentScore = Math.floor(studentScoresSum / subjectsNumber)

document.write(`The average score is: ${studentScore}`)
function getStudentCategory(score) {
  let studentScore
  switch (score) {
    case 2:
      studentScore = "двійочник"
      break
    case 3:
      studentScore = "трійочник"
      break
    case 4:
      studentScore = "хорошист"
      break
    case 5:
      studentScore = "відмінник"
      break
    default:
      studentScore = "invalid score"
      break
  }
  return studentScore
}
const studentCategory = getStudentCategory(studentScore)
document.write(`<br>Category of student: ${studentCategory}`)
