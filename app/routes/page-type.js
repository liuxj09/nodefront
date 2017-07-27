/**
 * 响应请求预执行函数
 */
const baseData = require('../interface/base');
const getTopBar = baseData.getTopBar;

// 标准页面，不作预处理
const normalPage = (callback) => async (ctx, next) => {
	const head = {
		domain: ctx._host
	}
	ctx.previewData = []
	ctx.previewData.push(head)
	await callback(ctx, next)
}
exports.normal = normalPage

// 活动页，默认加载domain等页面基础属性
const activityPage = (callback) => async (ctx, next) => {
	const head = {
		domain: ctx._host
	}
	let type = ctx.cookies.get('companyId') || ''
	if (/^K/.test(type)) {
		type = 'kfs'
	} else if (/^G/.test(type)) {
		type = 'gys'
	} else {
		type = 'yk'
	}
	head.userType = type
	ctx.previewData = []
	ctx.previewData.push(head)
	await callback(ctx, next)
}
exports.activity = activityPage

// 无预请求页面
const clientPage = (path = '') => async (ctx, next) => {
	if (path) {
		path = ctx.viewPath.match(/[^\/]+$/)[0]
	}
	ctx.renderPage(path)
	await next()
}
exports.client = clientPage

// 相对pages目录无需请求页面
const relativePage = (path = '') => async (ctx, next) => {
	ctx.renderPage(path)
	await next()
}
exports.relative = clientPage