const pageType = require('../page-type')
const activity = require('../../interface/activity')
const getAreaDevelopers = activity.getAreaDevelopers
const lodash = require('lodash')

module.exports = {
	// '/': {
	// 	template: '/index',
	// 	callback: pageType.normal(async (ctx, next) => {
	// 		ctx.renderPage()
	// 		await next()
	// 	})
	// },
	'/southwest': pageType.activity(async (ctx, next) => {
		let data
		try {
			data = await getAreaDevelopers(ctx)
		} catch(err) {
			data = []
		}
		await ctx.renderPage('', {data: lodash.chunk(data, 5)})
		await next()
	}),
	'/southwest_m': pageType.activity(async (ctx, next) => {
		let data
		try {
			data = await getAreaDevelopers(ctx)
		} catch(err) {
			data = []
		}
		console.log(data)
		await ctx.renderPage('', {data: lodash.chunk(data, 3)})
		await next()
	})
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