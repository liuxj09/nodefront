const md5 = require('md5')
const lodash = require('lodash')
exports.getAreaDevelopers = async (ctx) => {
	let res
	const api_confusion_code = '4c08cf920MCYCONFUSION'
	const timemark = (new Date()).getTime()
	const token = md5(timemark + '_' + api_confusion_code)
	try {
		ctx.cookies.set('api_confusion_code', api_confusion_code, {
			path: '/',
			domain: '.' + ctx._host
		})
		res = await ctx.getData('https://m.' + ctx._host + '/api/web/joint-recruit/get-developer?bigArea=southwest&areaCode=&c_nonce=' + timemark + '&' + 'c_nonce_token=' + token)
		// for(var i = 0; i < 20; i++) {
		// 	res.data.push({developer_id: 'K004764'})
		// }
		// console.log(`${JSON.stringify(res)} \n\n====>`)
		// res = lodash.chunk(res.data, 5)
	} catch(err) {
		// throw new Error(err || 'unexpected error')
		res = {data: []}
	}
	return res.data
}