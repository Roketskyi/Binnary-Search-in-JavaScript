const Arr = [5, 1, 3, 2, 8, 4, 9, 13, 11, 18, 19]

function find(mas, num){
    let start = 0;
    let stop = mas.length;
    let target = num;

    for (let j = 0; j < mas.length; j++){
        for (let i = 0; i < mas.length - 1; i++){
            if (mas[i] > mas[i + 1]){
            const result = mas[i]
            mas[i] = mas[i + 1]
            mas[i + 1] = result
            }
        }
    }

    console.log(mas)

    do {
        let index = Math.round((stop - start) / 2) + start;
        let diff = target-mas[index];
        if (diff === 0) {
            return index;
        }

        if(start === stop || start > stop) {
            return (-1);
        }

        if (diff > 0) {
            start = index + 1;
        } else {
            stop = index - 1;
        }
    } while (true);
}

console.log(`Index in you mas: ${find(Arr, 8)}`)
