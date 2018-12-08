//resolve - finished with sucess, reject - promise is not fullfiled
//ES6 feature, lack of support for IE11 and below (to suppot it use polyfills)
//https://www.npmjs.com/package/promise-polyfill
let promiseToCleanTheRoom = new Promise((resolve, reject) => {
    //cleaning the room
    let isClean = false;

    if(isClean){
        resolve('Clean');
    }else{
        reject(' not Clean');
    }

});

//then, acts when the promise is resolved
//waint unitl promise is resolve, formResolve = resolve
promiseToCleanTheRoom.then(fromResolve => {
    console.log('the room is' + fromResolve);
}).catch(function(fromReject){
	console.log('the room is' + fromReject);
})

//**************************************//

let cleanRoom = () => {
	return new Promise((resolve, reject)=>{
		resolve(' Cleaned The Room,');
	});
};

let removeGarbage = (message) =>{
	return new Promise((resolve, reject) =>{
		resolve(message + ' remove a Garbage,');
	});
};

let winIcecream = (message) => {
	return new Promise((resolve, reject)=>{
		resolve(message + ' won an Icecream')
	});
};

//nested promises
cleanRoom().then(result=>{
	return removeGarbage(result);
}).then(result=>{
	return winIcecream(result);
}).then(result=>{
	//if all promises are fillfulled
	console.log('finished' + result);
})

//log 'all finished' when all tasks are finished
Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then(()=>{
	console.log('all finished');
});

//use race when you want return result if any of promises is fullfiled
Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then(()=>{
	console.log('one of them is finished');
});

//****************** REAL WORLD EXAMPLE ********************/
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//fetch returns a promise (with pending)
Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(()=>console.log('error'))