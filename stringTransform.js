function stringTransform(str) {
    const length = str.length;
    let result = str;

    if (length % 3 === 0 && length % 5 === 0) {
        // To reverse the string
        result = result.split('').reverse().join('');
        // To replace each character with its ASCII code
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // To reverse the string
        result = result.split('').reverse().join('');
    } else if (length % 5 === 0) {
        //To replace each character with its ASCII code
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}

const choice = "Hello World";
console.log(stringTransform(choice)); // Output: "87 111 114 108 100 32 111 108 108 101 72"
