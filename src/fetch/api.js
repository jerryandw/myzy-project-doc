import Cookies from 'js-cookie';
import axios from 'axios';
import $ from 'jquery';
import Vue from 'vue';
// import qs from 'qs';
// import store from '@/store/index.js';
// import {Message} from 'element-ui';


let AUTH_TOKEN = (function () {
  return Cookies.get('token');
})();

var instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.interceptors.request.use(function (config) {
  config.headers.Authorization = Cookies.get('token');
  return config;
}, function (err) {
  return Promise.reject(err);
});
instance.interceptors.response.use(function (res) {
  if (res.headers.authorization) {
    Cookies.set('token', res.headers.authorization);
  }
  return res;
}, function (err) {
  return Promise.reject(err);
});
Vue.prototype.$axios = instance;


export function ajaxApi(method, url, params,callback) {
	return new Promise(function(resolve, reject) {
		var ajaxParams = {
			method: method,
			url: url,
			params: params
		}
		instance(ajaxParams).then(res => {
			
			var result = JSON.parse(JSON.stringify(res.data))
			// SetToken.loginOut()
			if(/^\/track\/api\/cap\//.test(url)) {
				// 无界cap 返回值处理
				resolve(result)
			} else if(result.code == 20000 || result.status == 0) {
				resolve(result.data)
			} else if(JSON.stringify(result) == '{}' || result.code == 20014 || result.code == 20015 || result.code == 20016 || result.code == 10013 || result.code == 10008) {
				store.commit('logout');
				SetToken.rewriteToken()
				Message({
		          type: 'error',
		          message: '登录已过期,5秒后进入到登录页面',
		          duration: 5000
		        });
		        setTimeout(function () {
		          window.location.href = window.location.protocol + '//' + window.location.host + '/#login';
		          window.location.reload();
		        }, 4000);
			} else {
				if (result.message === '未查询到该用户') {
					store.commit('logout');
					SetToken.rewriteToken()
					Message({
			          type: 'error',
			          message: '登录已过期,5秒后进入到登录页面',
			          duration: 5000
			        });
			        setTimeout(function () {
			          window.location.href = window.location.protocol + '//' + window.location.host + '/#login';
			          window.location.reload();
			        }, 4000);
		        } 
				if(callback && typeof callback == 'function'){
					callback(result)
				}else{
					if(result.message !== '未查询到该用户'){
						Vue.prototype.$Message.error(result.message);
					}
				}
				reject(result)
			}
		}).catch((error) => {
			reject(error)
		})
	})
}
export function ajaxJson(method, url, data) {
  return new Promise(function(resolve, reject) {
		var ajaxParams = {};
		if(method === 'post') {
			ajaxParams = {
				method: method,
				url: url,
				data: data
			}
		} else {
			ajaxParams = {
				method: method,
				url: url,
				params: data
			}
		}
		instance(ajaxParams).then(res => {
      var result = JSON.parse(JSON.stringify(res.data))
    //   SetToken.loginOut().then(res => {
    //     if (!ajaxParams.url.includes('login') && !res) {
    //       window.location.href = window.location.protocol + "//" + window.location.host + '/#login';
    //       window.location.reload();
    //     }
    //   });
			if(result.code == 20000) {
				resolve(result.data)
			}else if (JSON.stringify(result) == '{}' || result.code == 20014 || result.code == 20015 || result.code == 20016 || result.code == 10013 || result.code == 10008) {
        SetToken.rewriteToken()
        $('<p class="goLogin">登录已过期,5秒后进入到登录页面</p>').appendTo('body')
        setTimeout(function () {
          window.location.href = window.location.protocol + "//" + window.location.host + '/#login';
          window.location.reload();
        }, 4000)
        Cookies.set('user', '')
      } else {
        if (result.message) {
          Message({
            message: result.message,
            type: 'error'
          })
        }
        reject(result)
			}
		}).catch((error) => {
			reject(error)
		})
	})
}
const myzy = '/api/v5'; //查询中心
const loginUrl2 = '/api/v4'; //关系

const loginUrl = '/api/login';
const systemUrl = '/api/system';
const gxUrl = '/api/v7'; //IDMAP
const bqUrl = '/api/v9'; //标签

const qxUrl = '/api/v8';
export default {
  api(method, url, params, callback) {
		return ajaxApi(method, url, params, callback)
	},
  json(method, url, params) {
    return ajaxJson(method, url, params);
  },
  bqUrl,
	gxUrl,
	loginUrl2,
  loginUrl,
	systemUrl,
    myzy,
  qxUrl,
  instance
};
