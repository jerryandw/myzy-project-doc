<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">我的消息</div>
    </div>
    <div id="content" class="mainBox" v-cloak>
	<div class="bottomBox">
		<ul>
				<li v-for="item in docArr" @click="toInfoFun(item.type)">
					<div class="titleBox1"  v-bind:class="addclass(item.type)">
						{{item.states}}
					</div>
					<div class="contentBox">
						<div class="describeBox">
							<span class="firstTitle">预约医生:</span><span class="firstTitle">{{item.name}}</span>
						</div>
						<div class="describeBox">
							<span>预约时间:</span><span>{{item.time1}}</span>
						</div>
						<div class="describeBox">
							<span>预约医院:</span><span>{{item.hospital}}</span>
						</div>
					</div>
					<div class="btnBox">
						<div class="timeBox">{{item.time2}}</div>
						<div class="InfoBtn">详情</div>
					</div>
				</li>
				
			</ul>
	</div>
</div>
  
</div>
</template>

<script>
    import 'src/style/comman.css'
    import headTop from 'src/components/header/head'

    export default {
      data(){
            return{
    			test:false,
			docArr:[
				{
					name:"张医生",
					time1:"2020-2-18 9:00-10:00 周二 上午",
					hospital:"北京首都医院",
					time2:"2020-2-17  12:00",
					states:"您的预约已经成功了！",
					type:4,
					color:'redColor'
				},
				{
					name:"张医生",
					time1:"2020-2-18 9:00-10:00 周二 上午",
					hospital:"北京首都医院",
					time2:"2020-2-17  12:00",
					states:"您的预约单还未支付，赶紧支付吧！",
					type:1
				},
				{
					name:"张医生",
					time1:"2020-2-18 9:00-10:00 周二 上午",
					hospital:"北京首都医院",
					time2:"2020-2-17  12:00",
					states:"您的预约单正在核实保单中。",
					type:2
				}
			]
            }
        },
        components: {
            headTop,
        },
        mounted(){
            
        },
        computed: {
        
        },
        methods: {
            goPageFun(){
               window.history.back(-1); 

            },
            toInfoFun(num){
				let src = "";
				switch(num){
					case 1:
						src = "/waitExamine";
					break;
					case 2:
						src = "/waitOrder"
					break;
					case 3:
						src = "goingOrder.html"
					break;
					case 4:
						src = "/overorder"
					break;
					case 5:
						src = "cancelOrder.html"
					break;
				}
				this.$router.push(src);
			},
            addclass(i){
			    switch (i) {
			        case 1:
			            return 'redColor';
			        case 4:
			            return 'grennColor';
			        case 2:
			            return '';
			    }
			},
            
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';

  
    .detail_page{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 202;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .scroll_container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: 1.95rem;
        overflow-y: auto;
    }
    .markdown{
    	font-size: .65rem;
    	padding: 0 .7rem;
        color: #666;
        padding-bottom: 2rem;
    }
    .titleBox {
  position: fixed;
  width: 18.75rem;
  height: 2.225rem;
  line-height: 2.225rem;
  top: -0.05rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  font-size: 0.8rem;
  color: #333333;
  z-index: 999;
  clear: both;
}
.titleBox .goPage {
  width: 0.45rem;
  height: 0.775rem;
  float: left;
  z-index: 999;
}
.titleBox .goPage .goPageImg {
  width: 0.45rem;
  height: 0.775rem;
  margin-left: 0.75rem;
}
.titleBox .addBtn {
  background-color: #4eb92a;
  position: absolute;
  width: 2.85rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  right: 0.75rem;
  top: 0.5rem;
  text-align: center;
  color: #ffffff;
  z-index: 999;
}
.titleBox .titleContent {
  position: absolute;
  width: 18.75rem;
  height: 2.225rem;
  top: 0;
  text-align: center;
  float: right;
}
.maskDiv {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  _position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 18.75rem;
  height: 100%;
  overflow: hidden;
}
.maskDiv .payBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  width: 17.55rem;
  height: 17.725rem;
  left: 0.6rem;
  bottom: 1.25rem;
  border-radius: 0.25rem;
  z-index: 3;
}
.maskDiv .payBox .titleBox1 {
  width: 17.55rem;
  height: 2.25rem;
  line-height: 2.25rem;
  font-size: 0.8rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-color: #207fc9;
  text-align: center;
  color: #ffffff;
  clear: both;
}
.maskDiv .payBox .titleBox1 .titleMeg {
  float: left;
  width: 10rem;
  height: 2.25rem;
  text-align: right;
}
.maskDiv .payBox .titleBox1 .imgBox {
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
  float: right;
}
.maskDiv .payBox .titleBox1 .imgBox .imgClose {
  width: 1rem;
  height: 1rem;
}
.maskDiv .payBox .contentBox {
  width: 17.55rem;
  height: 15.5rem;
}
.maskDiv .payBox .contentBox .payImgBox {
  width: 17.55rem;
  height: 10.875rem;
}
.maskDiv .payBox .contentBox .payImgBox .payImg {
  width: 17.55rem;
  height: 10.875rem;
}
.maskDiv .payBox .contentBox .payBtnBox {
  background-color: #4eb92a;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  width: 14.575rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  border-radius: 0.275rem;
  margin-left: 1.5rem;
  text-align: center;
  color: #FFFFFF;
  z-index: 27;
}
.maskDiv .tipMessageBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  width: 17.55rem;
  height: 10.225rem;
  left: 0.6rem;
  top: 12.5rem;
  border-radius: 0.25rem;
}
.maskDiv .tipMessageBox .titleBox1 {
  width: 17.55rem;
  height: 2.25rem;
  line-height: 2.25rem;
  font-size: 0.8rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-color: #207fc9;
  text-align: center;
  color: #ffffff;
  clear: both;
}
.maskDiv .tipMessageBox .titleBox1 .titleMeg {
  float: left;
  width: 10rem;
  height: 2.25rem;
  text-align: right;
}
.maskDiv .tipMessageBox .titleBox1 .imgBox {
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
  float: right;
}
.maskDiv .tipMessageBox .titleBox1 .imgBox .imgClose {
  width: 1rem;
  height: 1rem;
}
.maskDiv .tipMessageBox .tipContentBox {
  width: 17.55rem;
  height: 7.975rem;
}
.maskDiv .tipMessageBox .tipContentBox .contentMsg {
  width: 17.55rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.maskDiv .tipMessageBox .tipContentBox .btnBox {
  width: 17.55rem;
  height: 5rem;
}
.maskDiv .tipMessageBox .tipContentBox .btnBox .closeBtnBox {
  background-color: gray;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  width: 5.075rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  border-radius: 0.275rem;
  margin-left: 1.5rem;
  float: left;
  text-align: center;
  color: #FFFFFF;
  z-index: 27;
}
.maskDiv .tipMessageBox .tipContentBox .btnBox .okBtnBox {
  background-color: #4eb92a;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  width: 5.075rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  border-radius: 0.275rem;
  margin-right: 1.5rem;
  text-align: center;
  float: right;
  color: #FFFFFF;
  z-index: 27;
}

//new
.mainBox {
  background-color: #f2f2f2;
  height: 100%;
}
.mainBox .topBox {
  position: absolute;
  width: 17.75rem;
  height: 2.325rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-size: 0.65rem;
  top: 2.225rem;
  color: #666666;
}
.mainBox .contentBox ul li {
  width: 100%;
  position: relative;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.8rem;
  color: #666666;
  background-color: #FFFFFF;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  clear: both;
}
.mainBox .contentBox ul li .titleBox1 {
  float: left;
  margin-left: 0.85rem;
}
.mainBox .contentBox ul li .inputBox {
  float: right;
  margin-right: 0.85rem;
}
.mainBox .contentBox ul li .inputBox .baodanInput {
  width: 7.5rem;
}
.mainBox .contentBox ul li .inputBox .recoginBox {
  width: 3.75rem;
  height: 1.25rem;
  line-height: 1.25rem;
  display: inline-block;
  border-width: 2px;
  border-color: #2e74d1;
  border-style: solid;
  border-radius: 0.275rem;
  text-align: center;
  color: #333333;
}
.mainBox .contentBox ul li .inputBox span {
  float: right;
  margin-right: 1.25rem;
}
.mainBox .contentBox ul li .inputBox input {
  border: none;
  text-align: right;
}
.mainBox .contentBox ul li .iconNext {
  position: absolute;
  width: 0.45rem;
  height: 0.775rem;
  top: 0.8rem;
  right: 0.75rem;
}
.mainBox .contentBox .btnBox {
  background-color: #2e74d1;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  position: absolute;
  width: 14.575rem;
  height: 2rem;
  line-height: 2rem;
  bottom: 5rem;
  left: 2.1rem;
  border-radius: 0.275rem;
  font-size: 0.8rem;
  text-align: center;
  color: #f2f2f2;
  z-index: 2;
}


//munews
html {
  font-size: 40px;
}
@media only screen and (min-width: 320px) {
  html {
    font-size: 17.06666667px !important;
  }
}
@media only screen and (min-width: 360px) {
  html {
    font-size: 19.2px !important;
  }
}
@media only screen and (min-width: 375px) {
  html {
    font-size: 20px !important;
  }
}
@media only screen and (min-width: 400px) {
  html {
    font-size: 21.33333333px !important;
  }
}
@media only screen and (min-width: 411px) {
  html {
    font-size: 21.92px !important;
  }
}
@media only screen and (min-width: 414px) {
  html {
    font-size: 22.08px !important;
  }
}
@media only screen and (min-width: 480px) {
  html {
    font-size: 25.6px !important;
  }
}
html {
  font-family: "Microsoft YaHei";
}
body {
  background-color: #f5f5f5;
}
body,
div,
a,
img,
h5,
p,
ul,
li,
span {
  margin: 0;
  padding: 0;
}
a {
  border: none;
  text-decoration: none;
}
img {
  border: none;
  vertical-align: middle;
}
li {
  list-style: none;
}
body {
  padding: 0;
  margin: 0;
  position: absolute;
}
.mainBox {
  background-color: #f2f2f2;
  height: 100%;
}
.mainBox .bottomBox {
  width: 100%;
  position: absolute;
  top: 2.475rem;
  bottom: 1.25rem;
  left: 0px;
}
.mainBox .bottomBox ul {
  height: 18.5rem;
  padding: 0 0.6rem;
  padding-top: 0.625rem;
}
.mainBox .bottomBox ul li {
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  z-index: 12;
  clear: both;
}
.mainBox .bottomBox ul li .titleBox1 {
  width: 16.55rem;
  height: 1.875rem;
  line-height: 1.875rem;
  border-bottom: 1px solid #DEDEDE;
  font-size: 0.8rem;
  color: #333333;
}
.mainBox .bottomBox ul li .redColor {
  color: firebrick;
}
.mainBox .bottomBox ul li .grennColor {
  color: green;
}
.mainBox .bottomBox ul li .contentBox {
  width: 16.55rem;
  height: 4.2rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid #DEDEDE;
}
.mainBox .bottomBox ul li .contentBox .describeBox {
  width: 100%;
  height: 1.05rem;
  line-height: 1.05rem;
  font-size: 0.65rem;
  color: #666666;
}
.mainBox .bottomBox ul li .contentBox .describeBox .firstTitle {
  font-size: 0.7rem;
  color: #232323;
}
.mainBox .bottomBox ul li .btnBox {
  width: 16.55rem;
  height: 1.875rem;
  clear: both;
}
.mainBox .bottomBox ul li .btnBox .timeBox {
  width: 12.5rem;
  height: 1.875rem;
  line-height: 1.875rem;
  float: left;
  font-size: 0.65rem;
  color: #8c8c8c;
}
.mainBox .bottomBox ul li .btnBox .InfoBtn {
  border-width: 1px;
  border-color: rgb(46,116,209);
  border-style: solid;
  float: right;
  width: 3.35rem;
  line-height: 1.1rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  margin-top: 0.375rem;
  text-align: center;
  color: #207fc9;
  z-index: 50;
}


body {
  padding: 0;
  margin: 0;
  position: absolute;
}
.mainBox {
  background-color: #f2f2f2;
  height: 100%;
}

//dd

</style>
