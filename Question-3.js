// const relation = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]

function solution(relation) {
    let answer = 0
    let combineColumn = []
    let newArr = []
    let columnUniquely = []
    let itemUniquely = []
    for (let i = 0; i < record[0].length; i++) {
        combineColumn.push([i]);
        for (let j = 0; j < record[0].length; j++) {
            if (i != j) { combineColumn.push([i, j]); }
        }
    }
    combineColumn = [...new Set(combineColumn)]
    for (let m = 0; m < combineColumn.length; m++) {
        for (let n = 0; n < record.length; n++) {
            if (combineColumn[m].length == 1) {
                newArr.push(`${record[n][combineColumn[m]]}`)
                itemUniquely = [...new Set(newArr)];
                if (itemUniquely.length == record.length) { columnUniquely.push(combineColumn[m][0]); answer += 1; }
                if (n == record.length - 1) {
                    newArr = []
                    itemUniquely = []
                }
            }
            else {
                if ((columnUniquely.indexOf(combineColumn[m][0]) == -1 && columnUniquely.indexOf(combineColumn[m][1]) == -1)) {
                    newArr.push(`${[record[n][combineColumn[m][0]], record[n][combineColumn[m][1]]]}`)
                    itemUniquely = [...new Set(newArr.map(x => x))];
                    if (itemUniquely.length == record.length) { columnUniquely.push(combineColumn[m][0], combineColumn[m][1]); answer += 1; }
                    if (n == record.length - 1) {
                        newArr = [];
                        itemUniquely = []
                    }
                }

            }

        }
    }
    return answer;
}