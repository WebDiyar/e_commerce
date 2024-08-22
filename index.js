setTimeout(() => {
    console.log('1') 
}, 0);

Promise.resolve().then(() => setTimeout(() => {
    console.log('2')
}, 1000))

setTimeout(() => {
    console.log('3')
});

Promise.resolve().then(() => (
    console.log('4')
))

console.log('5')

// 5 4 3 1 2