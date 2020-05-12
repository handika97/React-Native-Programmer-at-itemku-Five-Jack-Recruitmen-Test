// const  record= ["Enter uid1234 Prodo", "Enter uid4567 Muzi", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan", "Change uid1234 Prodoo"],

function solution(record) {
    let answer = []
    let newarr = []
    const unique = [...new Set(record)];
    for (let i = 0; i < record.length; i++) {
        let word = record[i].split(' ')
        if (word[0] == "Enter") {
            answer.push(`${word[2]} came in.`)
        }
        else if (word[0] == "Leave") {
            newarr = unique.filter(rec => rec.split(' ')[0] == "Enter" && rec.split(' ')[1] == word[1])
            answer.push(`${newarr[0].split(' ')[2]} has left.`)
        }
        else if (word[0] == "Change") {
            newarr = unique.filter(rec => (rec.split(' ')[0] != "Change") && rec.split(' ')[1] == word[1])
            for (let j = 0; j < answer.length; j++) {
                if (answer[j].split(' ')[0] == newarr[0].split(' ')[2]) {
                    answer[j] = answer[j].replace(answer[j].split(' ')[0], word[2])
                }
            }
        }
    }
    return answer;
}