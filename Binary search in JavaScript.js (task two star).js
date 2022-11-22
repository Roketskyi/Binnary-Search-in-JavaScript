const massOfObj = [
    { index: 15, userName: 'Viktor Dutkevych', age: 17, occupation: 'housemaid' },
    { index: 11, userName: 'John Duo', age: 22, occupation: 'plumber' },
    { index: 45, userName: 'Taras Byrych', age: 68, occupation: 'seller' },
    { index: 33, userName: 'Ivan Naval', age: 15, occupation: 'realtor' },
    { index: 21, userName: 'Roman Roketskyi', age: 31, occupation: 'taxi driver' },    
  ]

function find(mas, num){
    let start = 0;
    let stop = mas.length;
    let target = num;

    for (let j = 0; j < mas.length; j++){
        for (let i = 0; i < mas.length - 1; i++){
            if (mas[i].age > mas[i + 1].age){
            const result = mas[i]
            mas[i] = mas[i + 1]
            mas[i + 1] = result
            }
        }
    }

    for (let i = 0; i < mas.length; i++) {
        let index = Math.round((stop - start) / 2) + start;
        
        let diff = target - mas[index].age;
        if (diff === 0) {
            return (mas[index]);
        }

        if(start === stop || start > stop) {
            return (-1);
        }

        if (diff > 0) {
            start = index + 1;
        } else {
            stop = index - 1;
        }
    }
}

console.log(find(massOfObj, 15))
