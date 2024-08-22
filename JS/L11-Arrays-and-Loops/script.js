
        /*
        const myArray = [10, 20, 30];
        console.log(myArray);
        console.log(myArray[1]);
        myArray[0] = 99;

        console.log(myArray);

        [1, 'hello', true, {name: 'socks'}, [1, 2]]

        console.log(typeof [1, 2]);
        console.log(Array.isArray([1, 2])) 
            
        myArray.push(100);
        console.log(myArray);

        myArray.slice(0, 1);
        console.log(myArray);
*/


// Loops

    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

    let randomNumber = 0;

    while (randomNumber < 0.5) {
        randomNumber = Math.random();
    } 

    console.log(randomNumber);



    const todoList = [
    'DSA',
    'Ritesh',
    'Project'
    ];

    for (let i = 0; i <= todoList.length - 1; i++) {
        const value = todoList[i];
        console.log(value);
    }

    const nums = [1, 1, 3];
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total += num;
    }

    console.log(total);

    const numsDoubled = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numsDoubled.push(num * 2);
    }

    console.log(numsDoubled);


    const [firstValue, secondValue] = [1, 2, 3];

    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
            continue;
        }
        console.log(i);
        if (i === 8) {
            break;
        }
    }

    let i = 1;
    while (i <= 10) {
        if (i % 3 === 0) {
            i++;
            continue;
        }
        console.log(i);
        break;
    }

    function doubleArray(nums) {
        const numsDoubled = [];

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            numsDoubled.push(num * 2);
        }

        console.log(numsDoubled);
    }
    doubleArray([1, 1, 3]);
    doubleArray([2, 2, 5]);
