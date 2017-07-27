
exports.getTopBar = async (ctx) => {
	let res = ''
	try {
		res = await ctx.getData('https://portal2.' + ctx._host + '/home/get-top-bar-menu')
		res = res.data
	} catch(err) {
		throw new Error(err || 'unexpected error')
	}
	return res
}