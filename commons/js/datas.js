export default {
	message: () => {
		const msgs = [
			{
				id: '10000',
				imgUrl: '../../static/tx.png',
				message: '遥遥领先',
				/**
				 * 0 文字
				 * 1 图片
				 * 2 语音
				 */
				types: 0,
				time: parseInt(new Date() / 1000) - 10000 * 10000,
				tip: 0
			},
			{
				id: '10001',
				imgUrl: '../../static/lei.jpg',
				message: '遥遥领先遥遥领先遥遥领先',
				types: 0,
				time: parseInt(new Date() / 1000) - 10000 * 1000,
				tip: 0
			},
			{
				id: '10000',
				imgUrl: '../../static/tx.png',
				message: '遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先',
				types: 0,
				time: parseInt(new Date() / 1000) - 10000 * 100,
				tip: 0
			},
			{
				id: '10001',
				imgUrl: '../../static/lei.jpg',
				message: '../../static/lei.jpg',
				types: 1,
				time: parseInt(new Date() / 1000) - 10000,
				tip: 0
			},
			{
				id: '10001',
				imgUrl: '../../static/lei.jpg',
				message: '../../static/lei.jpg',
				types: 1,
				time: parseInt(new Date() / 1000) - 1000,
				tip: 0
			},
			{
				id: '10001',
				imgUrl: '../../static/lei.jpg',
				message: '3',
				types: 2,
				time: parseInt(new Date() / 1000) - 1000,
				tip: 0
			},
			{
				id: '10000',
				imgUrl: '../../static/tx.png',
				message: '60',
				types: 2,
				time: parseInt(new Date() / 1000) - 1000,
				tip: 0
			},
			{
				id: '10001',
				imgUrl: '../../static/lei.jpg',
				message: '60',
				types: 2,
				time: parseInt(new Date() / 1000),
				tip: 0
			},
			{
				id: '10001',
				imgUrl: '../../static/lei.jpg',
				message: '不是你咋这么急啊',
				types: 0,
				time: parseInt(new Date() / 1000),
				tip: 0
			},
		]
		return msgs
	}
}