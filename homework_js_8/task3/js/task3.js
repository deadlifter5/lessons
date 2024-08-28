const scoresNumber = parseInt(prompt("Enter scores number", "5"))
const scoresList = []
for (let i = 1; i <= scoresNumber; i++) {
  const score = parseInt(prompt(`Enter score Nº${i}`, `5`))
  scoresList.push(score)
}

// ===============================================================================

function getAverageScore(scoresList) {
  let averageScore
  let scoresSum = 0
  for (let i = 0; i < scoresList.length; i++) {
    scoresSum += scoresList[i]
  }
  averageScore = scoresSum / scoresNumber
  return averageScore
}
const average = getAverageScore(scoresList)

// ===============================================================================

function getScores2Num(scoresList) {
  let scores2 = 0
  for (let i = 0; i < scoresList.length; i++) {
    if (scoresList[i] === 2) scores2++
  }
  return scores2
}
const sores2Number = getScores2Num(scoresList)
document.write(`Number of scores 2 = ${sores2Number}<br>`)

// ===============================================================================

function getGoodScoresNum(scoresList) {
  let goodScores = 0
  for (let i = 0; i < scoresList.length; i++) {
    if (scoresList[i] >= 4) goodScores++
  }
  return goodScores
}
const goodScores = getGoodScoresNum(scoresList)
document.write(`Number of scores 4 and 5 = ${goodScores}<br>`)

// ===============================================================================

function getScoresLessThanAverage(scoresList) {
  let scoresLessThanAverage = 0
  for (let i = 0; i < scoresList.length; i++) {
    if (scoresList[i] < average) scoresLessThanAverage++
  }
  return scoresLessThanAverage
}
const scoresLessAverage = getScoresLessThanAverage(scoresList)
document.write(`Number of scores less than average = ${scoresLessAverage}`)
