/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
import {Toast} from 'mint-ui';

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://free.shenzhuo.vip:16374';
    imgBaseUrl = '/img/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}

export const localapi = undefined;
export const proapi = undefined;
function toast(mess) {
	let instance = Toast(mess);
	setTimeout(() => {
	  instance.close();
	}, 1000);
  }
export {
	baseUrl,
	routerMode,
	imgBaseUrl,
	toast
}