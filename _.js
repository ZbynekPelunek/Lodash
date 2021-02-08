const _ = {
    //NUMBER methods
    clamp (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange (number, startValue, endValue) {
        if(endValue == undefined){
            endValue = startValue;
            startValue = 0; 
        }

        if(startValue > endValue){
            let temp;
            temp = startValue;
            startValue = endValue;
            endValue = temp;
        }

        if (number >= startValue && number < endValue){
            return true;
        }else{
            return false;
        }
    },
    //STRING methods
    words (str) {
        return str.split(' ');
    },
    pad (str, length) {
        if (str.length < length){

            const totalPadding = length - str.length;
            const beginningPadding = Math.floor(totalPadding / 2);
            const endingPadding = totalPadding - beginningPadding;
            const paddedString = ' ';

            return paddedString.repeat(beginningPadding).concat(str, paddedString.repeat(endingPadding));

        } else {
            return str;
        }
    },
    //OBJECT methods
    has (obj, key) {
        
        const hasValue = obj[key];
        if(hasValue != undefined){
            return true;
        }
        return false;
        /*
        if (key) {
            return Object.keys(obj).includes(key); //also pass tests
        }
        */
    },
    invert (obj) {
        let invertedObj = {};

        for (let key in obj){
            const originalValue = obj[key];
            invertedObj = {originalValue: key}
        }

        return invertedObj;
    },
    findKey (obj, predicate) {
        for (let key in obj){
            let value = obj[key];
            let predicateReturnValue = predicate(value);
            if(predicateReturnValue){
                return key;
            };
        };
        return undefined;
    },
    //ARRAY methods
    drop (arr, number) {
        
        if(!number){
            number = 1;
        }
        const droppedArray = arr.slice(number);

        return droppedArray;

        /*
        //also works, first version
        if(number){
            for (let i = 0; i < number; i++){
                arr.shift();
            };
            return arr;
        }else{
            arr.shift();
            return arr;
        };
        */
    },
    dropWhile(arr, predicate) {
        const dropNumber = arr.findIndex((element, index) => !predicate(element, index, arr));
        const droppedArray = this.drop(arr, dropNumber);

        return droppedArray;
    },
    chunk (arr, size) {
        if (!size){
            size = 1;
        };
        let chunksArr = [];
        for (let i = 0; i < arr.length; i += size){
            let arrayChunk = arr.slice(i, i+size);
            chunksArr.push(arrayChunk);
        };
        return chunksArr;
    }
};




// Do not write or modify code below this line.
module.exports = _;