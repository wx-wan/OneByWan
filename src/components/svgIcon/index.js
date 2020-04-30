import Vue from 'vue'
import SvgIcon from './svgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
/*
* require.context函数接受三个参数
* directory {String} -读取文件的路径
* useSubdirectories {Boolean} -是否遍历文件的子目录
* regExp {RegExp} -匹配文件的正则
* */
const req = require.context('../../icons/svg', false, /\.svg$/)
/*
* require.context函数执行后返回的是一个函数,并且这个函数有3个属性
* resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
* keys {Function} -返回匹配成功模块的名字组成的数组
* id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载?
* 这三个都是作为函数的属性(注意是作为函数的属性,函数也是对象,有对应的属性)
*/
requireAll(req)
