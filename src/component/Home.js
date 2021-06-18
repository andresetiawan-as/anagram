import React, {Fragment} from 'react';

const Anagram = (strs) => {
    let result = [];
    let stringObj = {};
    console.log("Data: ", strs);
    for (let i = 0; i < strs.length; i++) {
        const string = strs[i];
        const stringSorted = sortString(strs[i]);

        if (stringObj[stringSorted]) {
            stringObj[stringSorted].push(string);
        } else {
            stringObj[stringSorted] = [string];
        }
    }

    for (let key in stringObj) {
        result.push(stringObj[key]);
    }

    console.log("result: ", result);
    return result;
}

const sortString = (str) => {
    let arr = str.split('');
    let tmp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr.join('');
}

const Home = () => {
    const data = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
    const result = Anagram(data)

    return (
        <Fragment>
            <div>
                <p>Data: ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']</p>
                <br/>
                <p>Result:</p>
                <p>Please Check Console log</p>
            </div>
        </Fragment>
    )
}


export default Home