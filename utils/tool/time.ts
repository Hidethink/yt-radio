export function wait(time: number){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve('done')
		},time * 1000)
	})
}