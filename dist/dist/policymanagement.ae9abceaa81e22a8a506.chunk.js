(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{135:function(t,i,n){"use strict";var e=n(93);n.n(e).a},169:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"rating_page"},[e("div",{staticClass:"titleBox",on:{click:t.goPageFun}},[e("div",{staticClass:"goPage",on:{click:t.goPageFun}},[e("img",{staticClass:"goPageImg",attrs:{src:n(64)}})]),t._v(" "),e("div",{staticClass:"titleContent"},[t._v("保单管理")]),t._v(" "),e("div",{staticClass:"addBtn",on:{click:function(i){return i.stopPropagation(),t.toAddFun(i)}}},[t._v("\n              添加\n          ")])]),t._v(" "),t._m(0)])};e._withStripped=!0;var s=(n(135),n(9)),o=Object(s.a)({data:function(){return{isuser:!0,serviceData:null,questionTitle:[],questionDetail:[],name:"",sex:"",bordth:"",phone:""}},mounted:function(){},mixins:[],components:{},props:[],methods:{goPageFun:function(){this.$router.go(-1)},aaa:function(){},toQuestionDetail:function(t,i){this.SAVE_QUESTION({title:t,detail:this.questionDetail[i]}),this.$router.push("/service/questionDetail")},toAddFun:function(){this.$router.push("/addpolicy")}}},e,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"nouser"},[i("span",[this._v("还没有用户，赶快添加吧！")])])}],!1,null,"0378ab8f",null);o.options.__file="src/page/policyManagement/index.vue",i.default=o.exports},64:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAfCAYAAADqUJ2JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5RUFBNDczNzhEQjExRUE5QTY0OUFDMURBMzY1ODIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5RUFBNDc0NzhEQjExRUE5QTY0OUFDMURBMzY1ODIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjlFQUE0NzE3OERCMTFFQTlBNjQ5QUMxREEzNjU4MjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjlFQUE0NzI3OERCMTFFQTlBNjQ5QUMxREEzNjU4MjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TtfneAAABl0lEQVR42qyWPUvEQBCGk5weiGAh/g1LsUojauVH4ykoCAriZyf4gYjaiGIh6ClWFt6d1YF4iIWFCKnshGv9BSIWNnKIxndkImHYTXaDAw+bTJaHJdmdiRuGoUPh+75jGTPgAHyC6SYnW8yD09j9kfcPEoq8rWgCnCjym56l5AK4Ir8Czk1FYyyR89f5hTsmoiFQUszdAHvRjWcgqYJmkd8Hu/FEkqgvQbImJ+tEPeBaITlUSXQiktyAFpE/A8u65UtRN6hpJAsgNBGR5A60ijmlNMmfCAe2iyVt4vklmEqT/Iog6cR4q5FMgi+THevxju0Q+TcwayqJRAXwIvLtvKK8sSgIgmeMveBVPBvkDZk3XZEDWZ33j0pWBjkjEUedj8W7mFPg95gzFVE8gX6FbDxNpjoijwmyoqKwJR5akg2DD5Gf43rtmoooHsCARnZsI6K4Z1lD5Bfj1dG01JJslBthPFZtSm0UVFpGNLIturDptDXuJlWxgG36wrYN8oorwrfI72Rp2RWFrJH1J6LCY5FLzdKPAAMA7AVYpV5EKdIAAAAASUVORK5CYII="},93:function(t,i,n){}}]);