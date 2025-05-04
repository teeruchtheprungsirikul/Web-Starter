/*
object function
*/

let students = [
    {
    name : 'New',
    score : 50,
    grade : 'A'
    },
    {
    name : 'test',
    score : 60,
    grade : 'C'
    },
    {
        name : 'jj',
        score : 65,
        grade : 'D'
        }
]

let student = students.find((s) => {
    if (s.name == 'test') {
        return true
    }
})

// let doublescore_student = students.map((s) => {
//     s.score = s.score * 2
//     return s
// })

let highScore_student = students.filter((s) => {
    if (s.score >= 60){
        return true
    }
})
//console.log('student',student)

//console.log('doublescore_student',doublescore_student)

console.log('highScore_student: ', highScore_student)