const Arr = [2, 3, 5, 7, 8, 9, 12, 15, 20]

function find(mas, num){
    let start = 0;
    let stop = mas.length;
    let target = num;

    do {
        let index = Math.round((stop - start) / 2) + start;
        let diff = target-mas[index];
        if (diff === 0) {
            return index;
        }

        if(start === stop || start > stop ) {
            return (-1);
        }

        if (diff > 0) {
            start = index + 1;
        } else {
            stop = index - 1;
        }
    } while (true);
}

console.log(`Index in you mas: ${find(Arr, 9)}`)