import App from '../App'
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const patientadmin = r => require.ensure([], () => r(require('../page/patientadmin/patientadmin')),'patientadmin')
const addpatientadmin = r => require.ensure([], () => r(require('../page/patientadmin/children/addpatientadmin')), 'addpatientadmin')
const namesetting = r => require.ensure([], () => r(require('../page/patientadmin/children/nameSetting')), 'namesetting')
const sexsetting = r => require.ensure([], () => r(require('../page/patientadmin/children/sexSetting')), 'sexsetting')
const bordthsetting = r => require.ensure([], () => r(require('../page/patientadmin/children/bordthSetting')), 'bordthsetting')
const phonesetting = r => require.ensure([], () => r(require('../page/patientadmin/children/phoneSetting')), 'phonesetting')
const mynews = r => require.ensure([], () => r(require('../page/mynews/index')), 'mynews')
const overorder = r => require.ensure([], () => r(require('../page/mynews/children/overOrder')), 'overorder')

const cancelorder = r => require.ensure([], () => r(require('../page/mynews/children/cancelorder')), 'cancelorder')
const waitExamine = r => require.ensure([], () => r(require('../page/mynews/children/waitExamine')), 'waitExamine')
const waitorder = r => require.ensure([], () => r(require('../page/mynews/children/waitOrder')), 'waitorder')
// const overorder = r => require.ensure([], () => r(require('../page/mynews/children/overorder')), 'overorder')
const mesetting = r => require.ensure([], () => r(require('../page/mesetting/index')), 'mesetting')
const myorder = r => require.ensure([], () => r(require('../page/myorder/index')), 'myorder')
const policymanagement = r => require.ensure([], () => r(require('../page/policyManagement/index')), 'policymanagement')
const addpolicy = r => require.ensure([], () => r(require('../page/policyManagement/children/addpolicy')), 'addpolicy')
const docinfo = r => require.ensure([], () => r(require('../page/docinfo/index')), 'docinfo')
const doclist = r => require.ensure([], () => r(require('../page/doclist/index')), 'doclist')

const yydocorderList = r => require.ensure([], () => r(require('../page/doclist/children/yydocOrderList')), 'yydocorderList')
const orderput = r => require.ensure([], () => r(require('../page/doclist/children/orderput')), 'orderput')

const orderConfirm = r => require.ensure([], () => r(require('../page/doclist/children/orderConfirm')), 'orderConfirm')

const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
const wxlogin = r => require.ensure([], () => r(require('../page/login/wxlogin')), 'wxlogin')
const loginphone = r => require.ensure([], () => r(require('../page/login/loginphone')), 'loginphone')

//新家页面
const myyygl = r => require.ensure([], () => r(require('../page/myyygl/myyygl')), 'myyygl')
const gotoyyxq = r => require.ensure([], () => r(require('../page/myyygl/children/gotoyyxq')), 'gotoyyxq')
//我的出诊医院
const myczyy = r => require.ensure([], () => r(require('../page/myczyy/myczyy')), 'myczyy')
const addmyczyy = r => require.ensure([], () => r(require('../page/myczyy/children/addmyczyy')), 'addmyczyy')
const yynamesetting = r => require.ensure([], () => r(require('../page/myczyy/children/yynamesetting')), 'yynamesetting')
const ksnamesetting = r => require.ensure([], () => r(require('../page/myczyy/children/ksnamesetting')), 'ksnamesetting')



export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
           //个人信息页
           {
            path: '/profile',
            component: profile,
          
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        //搜索页
        {
            path: '/search/:geohash',
            component: search
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
          // 服务中心
        {
            path: '/patientadmin',
            component: patientadmin,
            // children: [{
            //     path: 'addpatientadmin', //添加患者
            //     component: addpatientadmin,
            // }, ]
        },
        //我的订单
        {
            path: '/myorder',
            component: myorder,
        },
        {
            path: '/addpatientadmin',
            component: addpatientadmin,
        },
        //患者姓名编辑
        {
            path: '/namesetting',
            component: namesetting,
        },
        //患者性别编辑
        {
            path: '/sexsetting',
            component: sexsetting,
        },
        //患者出生编辑
        {
            path: '/bordthsetting',
            component: bordthsetting,
        },
        //患者手机编辑
        {
            path: '/phonesetting',
            component: phonesetting,
        },
        {
            path: '/mynews',
            component: mynews,
        },
        //已经取消的订单详情
        {
            path: '/cancelorder',
            component: cancelorder,
        },
        //已经完成的订单详情
        {
            path: '/overorder',
            component: overorder,
        },
        //待支付详情
        {
            path: '/waitExamine',
            component: waitExamine,
        },
        //待诊断订单详情
        {
            path: '/waitorder',
            component: waitorder,
        },
        //保单管理

        {
            path: '/policymanagement',
            component: policymanagement,
        },
        //保单添加
        {
            path: '/addpolicy',
            component: addpolicy,
        },
         //wx一键登录
         {
            path: '/wxlogin',
            component: wxlogin
        },
        //手机号登录
        {
            path: '/loginphone',
            component: loginphone
        },
        //下载页
        {
            path: '/download',
            component: download
        },
         //医生详情
         {
            path: '/docinfo',
            component: docinfo
        },
         //预约医生
         {
            path: '/yydocorderList',
            component: yydocorderList
        },
        //预约确认
        {
            path: '/orderConfirm',
            component: orderConfirm
        },
        
        
        //首页名医列表也
        {
            path: '/doclist',
            component: doclist
        },
        //预约信息提交
        {
            path: '/orderput',
            component: orderput
        },
         //我的设置
         {
            path: '/mesetting',
            component: mesetting
        },
        //预约管理
        {
            path: '/myyygl',
            component: myyygl
        },
        //预约详情
        {
            path: '/gotoyyxq',
            component: gotoyyxq
        },
        //出诊医院
        {
            path: '/myczyy',
            component: myczyy
        },
        //
        //添加出诊医院
        {
            path: '/addmyczyy',
            component: addmyczyy
        },
         //医院名字
         {
            path: '/yynamesetting',
            component: yynamesetting
        },
        //科室名字
        {
            path: '/ksnamesetting',
            component: ksnamesetting
        },
        

        
        
    ]
}]
