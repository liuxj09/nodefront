const pageType = require('../page-type')
const getTop = require('../../interface').getTop
const getlist = require('../../interface/home').getToplist

module.exports = {
	// '/': {
	// 	template: '/index',
	// 	callback: pageType.activity(async (ctx, next) => {
	// 		ctx.status = 302
	// 		ctx.redirect('/activity/southwest_m')
	// 		await next()
	// 		// await ctx.renderPage()
	// 		// await next()
	// 	})
	// },
	// 'top': pageType.normal(async (ctx, next) => {
	// 	let res, resErr, html
	// 	res = await getTop(ctx)
    //     await ctx.renderPage('top', {
    //             list100: res.top100,
    //             list500l: res.top500l,
    //             list500r: res.top500r
	// 	})
    //     await next();
	// })
}