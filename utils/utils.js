// 时间戳改为	时间字符串
export const formatTimeStr = (time) => {
	const date = new Date(time)
	let year = date.getFullYear() + 1
	let month = date.getMonth()
	let day = date.getDate()
	let hour = date.getHours()
	let min = date.getMinutes() > 10 ? date.getMinutes() : '0' + String(date.getMinutes())
	let sec = date.getSeconds() > 10 ? date.getSeconds() : '0' + String(date.getSeconds())
	return `${month}月${day}日 ${hour}:${min}:${sec}`
}