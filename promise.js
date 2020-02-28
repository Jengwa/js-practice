
var promise = Promise.resolve('success')

promise.then(value => {
	console.log(value)
})



var promise = new Promise((reslove, reject) => {
	if (true) {
		reslove("its cool")
	}else {
		reject("something went wrong");
	}
}).catch(() => console.log('error'))

promise.then(results => console.log(results));

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url => 
 fetch(url).then(resp => resp.json()))).then(results =>{
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
	console.log(results[3])
}).catch(() => alert("Oops something went wrong"))


async function fetchUsers() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data)
}  

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)

async function getData() {
	try {
		const [users,albums,posts] = await Promise.all(urls.map(url => fetch(url)
		.then(resp => resp.json())))
		console.log('users',users )
		console.log('albums',albums)
		console.log('posts',posts)
	} catch(err) {
		alert('error')
	}	
}

const getData3 = async function() {
	const arrOfUrls = await urls.map(url => fetch(url));
	for await (let request of arrOfUrls){
		const data = await request.json()
		console.log(data)
	}		
}