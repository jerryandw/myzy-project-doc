<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">待诊断订单详情</div>
    </div>
    <div id="content" class="mainBox" v-cloak>
        <div class="contentBox waitExamineTop">
            <ul>
                    <li class="waitLi">
                        <div class="userImgBox">
                            <img class="userInfoImg" src='../../../images/mingyi/indexUserImg.png' />
                        </div>
                        <div class="userInfoMessage">
                            <div class="docName"><span class="docName1">{{docObj.name}}</span> <span class="docName3">已审核,待诊断</span></div>
                        </div>
                        <div class="userContentBox">
                            <div class="describeBox timeSpan">
                                预约时间：{{docObj.orderTime}}
                            </div>
                            <div class="describeBox desBox">
                                预约医院：{{docObj.hospital}}
                            </div>
                            <div class="describeBox desBox">
                                科室：{{docObj.department}}
                            </div>
                            <div class="describeBox des2Box">
                                详细地址：{{docObj.detailed}}
                            </div>
                            <div class="describeBox des2Box">
                                说明：{{docObj.explain}}
                            </div>
                            <div class="describeBox des2Box">
                                私人助理：{{docObj.assistant}}
                            </div>
                            <div class="describeBox des2Box">
                                联系方式：{{docObj.phone}}
                            </div>
                            <div class="describeBox des2Box">
                                金额：¥ {{docObj.money}}
                            </div>
                        </div>
                        <div class="clearBtnBox">
                            <div class="clearBtn">取消</div>
                        </div>
                    </li>
                    
                </ul>
        </div>
        
        <div class="waitOrderInfo">
            <div class="titleBox2">
                订单信息
            </div>
            <div class="contentBox2">
                <div class="contentInfo">订单编号：20202171239</div>
                <div class="contentInfo">下单时间：2020-2-17 12:39</div>
                <div class="contentInfo">支付方式：保单</div>
                <div class="contentInfo">保单号：XX123456789</div>
            </div>
        </div>
        
        <div class="assistantInfo">
		<div class="titleBox1">
			私人助理
		</div>
		<div class="contentBox1">
			<div class="contentInfo">姓名：小助理</div>
			<div class="contentInfo">联系方式：15166668888</div>
		</div>
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
                showNum:1,
			    docObj:{
					name:"张医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../../images/mingyi/indexUserImg.png",
					states:2,
					orderTime:"2020-02-18  9:00-10:00 周二 上午",
					hospital:"北京市第一医院",
					department:"精神科",
					detailed:"一层101",
					explain:"说明点啥",
					assistant:"小助理",
					phone:"15166668888",
					money:"1000"
				}
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
            
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
 //watiExamine

.mainBox {
  background-color: #f2f2f2;
  height: 100%;
}
.mainBox .top {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 1.45rem;
  top: 2.125rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  background-color: #f2f2f2;
  z-index: 99;
}
.mainBox .contentBox {
  width: 100%;
  position: absolute;
  top: 4.275rem;
  left: 0px;
}
.mainBox .contentBox ul {
 padding: 0.625rem 0.6rem 0 0.6rem;
}
.mainBox .contentBox ul .waitLi {
  height: 15.8em;//15.125rem
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding: 0.375rem 0.5rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  z-index: 12;
  clear: both;
}
.mainBox .contentBox ul .waitLi .userImgBox {
  float: left;
  width: 2.2rem;
  height: 2.25rem;
}
.mainBox .contentBox ul .waitLi .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
  clear: both;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName .docName2 {
  float: right;
  color: #8c8c8c;
  font-size: 0.65rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName .docName3 {
  float: right;
  font-size: 0.65rem;
  color: #4eb92a;
}
.mainBox .contentBox ul .waitLi .userContentBox {
  height: 10.25rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
}
.mainBox .contentBox ul .waitLi .userContentBox .describeBox {
  height: 1.25rem;
  font-size: 0.7rem;
}
.mainBox .contentBox ul .waitLi .userContentBox .timeSpan {
  color: #2e74d1;
}
.mainBox .contentBox ul .waitLi .userContentBox .desBox {
  color: #232323;
}
.mainBox .contentBox ul .waitLi .userContentBox .des2Box {
  color: #8c8c8c;
}
.mainBox .contentBox ul .waitLi .clearBtnBox {
  height: 2.725rem;
  border-top: 1px solid #DEDEDE;
  clear: both;
}
.mainBox .contentBox ul .waitLi .clearBtnBox .clearBtn {
  float: right;
  background-color: #d5d5d5;
  width: 3.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  margin-top: 0.625rem;
  color: #ffffff;
  text-align: center;
  z-index: 15;
}
.mainBox .waitExamineTop {
  top: 2.225rem;
}
.mainBox .waitOrderInfo {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 8.5rem;
  left: 0.6rem;
  right:0.6rem;
  top: 26.675rem;
  padding: 0.375rem 0.6rem;
  border-radius: 0.25rem;
  z-index: 3;
}
.mainBox .waitOrderInfo .titleBox2 {
  height: 2.125rem;
  line-height: 2.125rem;
  font-size: 0.8rem;
  color: #232323;
  border-bottom: 1px solid #DEDEDE;
}
.mainBox .waitOrderInfo .contentBox2 {
  width: 16.55rem;
  height: 4.875rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.mainBox .waitOrderInfo .contentBox2 .contentInfo {
  width: 16.55rem;
  line-height: 1.25rem;
  font-size: 0.7rem;
  color: #8c8c8c;
}
.mainBox .goingOrderInfo {
  top: 16.35rem;
}
.mainBox .assistantInfo {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 5.975rem;
  left: 0.6rem;
  right: 0.6rem;
  top: 19.675rem;
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem;
  z-index: 3;
}
.mainBox .assistantInfo .titleBox1 {
  height: 2.125rem;
  line-height: 2.125rem;
  font-size: 0.8rem;
  color: #232323;
  border-bottom: 1px solid #DEDEDE;
}
.mainBox .assistantInfo .contentBox1 {
  width: 16.55rem;
  height: 2.35rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.mainBox .assistantInfo .contentBox1 .contentInfo {
  width: 16.55rem;
  line-height: 1.25rem;
  font-size: 0.7rem;
  color: #232323;
}
.mainBox .goingAssistantInfo {
  top: 25.075rem;
}
.mainBox .cancelOrderInfo {
  top: 11.625rem;
  height: 10.4rem;
}







</style>
