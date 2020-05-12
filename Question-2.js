// const users= [2, 1, 2, 6, 2, 4, 3, 3];
// const N= 5

function solution(N, users) {
    let answer = []
    let newUser = users
    for (let i = 0; i < N; i++) {
        let rate = users.filter(user => user == i + 1).length / newUser.length
        let userFilter = newUser.filter(user => user != i + 1)
        newUser = userFilter
        let user =
        {
            rate, i
        }
        answer.push(user)
    }
    answer = answer.sort((a, b) => a.rate < b.rate ? 1 : -1)
    for (let i = 0; i < N; i++) {
        answer[i] = (answer[i].i + 1)
    }
    return answer
}
