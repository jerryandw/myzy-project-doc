<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">预约确认</div>
    </div>
   <div  id="content">
	<div class="mainBox" >
		<div class="top" v-cloak>
			<div class="messageBox">
				<div class="userImgBox">
					<img class="userInfoImg" src="../../../images/mingyi/indexUserImg.png" />
				</div>
				<div class="userInfoMessage">
					<div class="docName"><span class="docName1">{{docObj.name}}</span> <span class="docName2">{{docObj.titleName}}</span></div>
					<div class="docType">{{docObj.department}}  {{docObj.titleName}}  {{docObj.time}}</div>
				</div>
			</div>
			
			<div class="Box describeBox">
				<div class="describeBox">
					<span class="title">患者姓名:</span><span class="content">某某</span>
				</div>
				<div class="describeBox">
					<span class="title">年龄:</span><span class="content">50岁</span>
				</div>
				<div class="describeBox">
					<span class="title">就诊医院:</span><span class="content">武汉市第一医院</span>
				</div>
				<div class="describeBox">
					<span class="title">就诊科室:</span><span class="content">精神科</span>
				</div>
				<div class="describeBox">
					<span class="title">预约时间:</span><span class="content">2020-2-18 9:00-10:00 周二 上午</span>
				</div>
				<div class="describeBox">
					<span class="title">说明:</span><span class="content">详细地址会在预约成功后由系统自动发送</span>
				</div>
				<div class="describeBox">
					<span class="title">费用:</span><span class="content">1000元</span>
				</div>
			</div>
			
			<div class="Box describeBox introductionBox" >
				<div class="describeTitle">
					就诊须知
				</div>
				<div class="describeBox">
					<span class="content">1、就诊前一天18:00前可取消，全额退款</span>
				</div>
				<div class="describeBox">
					<span class="content">2、就诊时，出示预约信息或者身份证即可</span>
				</div>
				<div class="describeBox">
					<span class="content">3、医生职业特殊，如遇医生临时停诊，会提前通知，并</span>
				</div>
				<div class="describeBox">
					<span class="content">且全额退款</span>
				</div>
				<div class="describeBox">
					<span class="content">4、就诊时可以携带以前的病历和X光/CT等就诊资料</span>
				</div>
			</div>
			
			<div class="clearBtn" @click="showMessageFun">取消</div>
			<div class="okBtn" @click="showPayFun">提交订单</div>
			
		</div>
		
	</div>
	
	<div class="maskDiv" v-show="showMask">
			<div class="payBox">
				<div class="titleBox1">
					<div class="titleMeg">订单支付</div>
					<div class="imgBox" @click="hidePayFun">
						<img class="imgClose"  src="../../../images/mingyi/closeBtn.png" />
					</div>
				</div>
				<div class="contentBox">
					<div class="payImgBox">
						<img class="payImg" src="../../../images/mingyi/img5.png" />
					</div>
					<div class="payBtnBox" @click="payFun">立即支付</div>
				</div>
			</div>
			
	</div>
	<div class="maskDiv" v-show="showMessage">
			<div class="tipMessageBox">
				<div class="titleBox1">
					<div class="titleMeg">系统提醒</div>
					<div class="imgBox" @click="hideMessageFun">
						<img class="imgClose"  src="../../../images/mingyi/closeBtn.png" />
					</div>
				</div>
				<div class="tipContentBox">
					<div class="contentMsg">确定要取消订单吗</div>
					<div class="btnBox">
						<div class="closeBtnBox" @click="hideMessageFun">取消</div>
						<div class="okBtnBox" @click="goPageFun">确定</div>
					</div>
					
				</div>
			</div>
			
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
                showMask:false,
			showMessage:false,
			docObj:{
					name:"张医生",
					titleName:"主治医师",
					department:"精神科",
					hospital:"北京首都医院",
					time:"从业5年",
					message:"抑郁症，精神分裂症，失眠焦虑，抑郁症，精神分裂症，失眠焦虑。",
					introduction:"内科副主任医师。大学本科，医学学士。糖尿病专科门诊主诊医师，从事内科临床工作20余年，曾在四川省人民医院内科及华西医院急诊科进修学习，擅长于糖尿病、高血压和呼吸、消化、心血管、泌尿系统等内科各类疾病的诊断治疗，以及内科急重症的急诊急救。参研2项国家以及校级科研项目。公开发表医学论文11篇。",
					img:"../../../images/mingyi/indexUserImg.png"
				},
				timeList:[
					{
					orderTime:"2020-02-18  9:00-10:00  周二  上午",
					time:"今天",
					money:1000,
					},
					{
					orderTime:"2020-02-18  9:00-10:00  周二  下午",
					time:"今天",
					money:1000,
					},
					{
					orderTime:"2020-02-25  9:00-10:00  周三  上午",
					time:"天后",
					money:1000,
					}
				]
				
            }
        },
        components: {
            headTop,
        },
        mounted(){
            // /Users/jerry/Downloads/mingyi_project/www/docList/orderConfirm.html
        },
        computed: {
        
        },
        methods: {
            goPageFun(){
               window.history.back(-1); 

            },
            toOkFun:function(){
				this.$router.push('/yydocorderList')
            },
            showPayFun:function(){
				this.showMask = true;
			},
			hidePayFun:function(){
				this.showMask = false;
			},
			payFun:function(){
				self.location = "../me/policyManagement.html?showRadio=1";
			},
			goPageFun:function(){
				this.showMessage = false;
				window.history.back(-1); 
				
			},
			showMessageFun:function(){
				this.showMessage = true;
			},
			hideMessageFun:function(){
				this.showMessage = false;
			}
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
 .mainBox {
  background-color: #f2f2f2;
  height: 100%;
}
.mainBox .Box {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  left: 0.6rem;
  right: 0.6rem;

  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
}
.mainBox .top {
  width: 100vw;
  height: auto;
  background-color: #f2f2f2;
}
.mainBox .top .messageBox {
  top: 2.975rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 3.7rem;
  left: 0.6rem;
  right:0.6rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  z-index: 4;
}
.mainBox .top .messageBox .userImgBox {
  float: left;
  width: 2.2rem;
  margin-top: 0.375rem;
}
.mainBox .top .messageBox .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .top .messageBox .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
  margin-top: 0.375rem;
}
.mainBox .top .messageBox .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
}
.mainBox .top .messageBox .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .top .messageBox .userInfoMessage .docName .docName2 {
  font-size: 0.65rem;
}
.mainBox .top .messageBox .userInfoMessage .docType {
  margin-bottom: 0.2rem;
  font-size: 0.65rem;
  color: #207fc9;
}
.mainBox .describeBox {
  height: 7.925rem;
  top: 7.675rem;
}
.mainBox .describeBox .describeBox {
  width: 100%;
  height: 1.05rem;
  line-height: 1.05rem;
  font-size: 0.65rem;
}
.mainBox .describeBox .describeBox .title {
  color: #2e2e2e;
}
.mainBox .describeBox .describeBox .content {
  color: #666666;
}
.mainBox .introductionBox {
  height: 8.025rem;
  top: 16.525rem;
}
.mainBox .introductionBox .describeTitle {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.8rem;
  margin-bottom: 0.375rem;
  color: #232323;
}
.mainBox .introductionBox .describeBox {
  width: 100%;
  height: 1.05rem;
  line-height: 1.05rem;
  font-size: 0.65rem;
}
.mainBox .introductionBox .describeBox .title {
  color: #2e2e2e;
}
.mainBox .introductionBox .describeBox .content {
  color: #666666;
}
.mainBox .clearBtn {
  border-radius: 11px;
  background-color: #cecece;
  position: absolute;
  width: 7.225rem;
  height: 2rem;
  line-height: 2rem;
  left: 1.325rem;
  top: 27.5rem;
  border-radius: 0.275rem;
  font-size: 0.8rem;
  color: #f2f2f2;
  text-align: center;
  z-index: 2;
}
.mainBox .okBtn {
  border-radius: 11px;
  background-color: #207fc9;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  position: absolute;
  width: 7.225rem;
  height: 2rem;
  line-height: 2rem;
  right: 1.325rem;
  top: 27.5rem;
  border-radius: 0.275rem;
  font-size: 0.8rem;
  color: #f2f2f2;
  text-align: center;
  z-index: 2;
}
.maskDiv {
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  position: absolute;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
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

 
</style>
