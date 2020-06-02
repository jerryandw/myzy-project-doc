<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">信息提交</div>
    </div>
    <div id="content" class="mainBox">
	<div class="top" v-cloak>
		<div class="lineBox">
			<span class="nameSpan">患者姓名<i></i></span>
			<input class="nameInput" placeholder="请选择患者" />
		</div>
		<div class="lineBox">
			<span class="nameSpan">年龄<i></i></span>
			<input class="nameInput" placeholder="请输入年龄" />
		</div>
		<div class="lineBox">
			<span class="nameSpan">联系电话<i></i></span>
			<input class="nameInput" placeholder="请输入手机号" />
		</div>
		<div class="lineBox">
			<span class="nameSpan">性别<i></i></span>
			<input class="nameInput" placeholder="请输入性别" />
		</div>
	</div>
	
	<div class="contentBox">
		<div class="title">病情描述</div>
		<div class="megBox">请详细描述您的病情、症状、治疗经过</div>
		<textarea class="textBox"></textarea>
	</div>
	
	<div class="bottomBox">
		<div class="title">上传照片</div>
		<div class="megBox">请上传疾病相关照片或者资料</div>
		<img class="img1Box" src="../../../images/mingyi/img1.png" />
	</div>
	
	<div class="btnBox" @click="toOkFun">下一步</div>
	
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
                docObj:{
					name:"张医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../../images/mingyi/indexUserImg.png"
				},
				timeList:[
					{
					orderTime:"2020-02-18  9:00-10:00  周二  上午",
					time:"今天",
					money:1000,
					},
					{
					orderTime:"2020-02-18  9:00-10:00  周二  上午",
					time:"今天",
					money:1000,
					},
					{
					orderTime:"2020-02-18  9:00-10:00  周二  上午",
					time:"今天",
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
.mainBox .top {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 10rem;
  padding: 0.5rem;
  top: 2.975rem;
  left: 0.6rem;
  right: 0.6rem;
  border-radius: 0.25rem;
  z-index: 5;
}
.mainBox .top .lineBox {
  height: 2.25rem;
  display: flex;
  justify-items: center;
  align-items: center;
  line-height: 2.25rem;
}
.mainBox .top .lineBox .nameSpan {
  flex: 1;
  font-size: 0.8rem;
  width: 3.3rem;
  height: 2.25rem;
  line-height: 2.25rem;
  text-align: justify;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  margin-right: 0.6rem;
}
.mainBox .top .lineBox i {
  display: inline-block;
  width: 100%;
  height: 0;
}
.mainBox .top .lineBox .nameInput {
  width: 12.05rem;
  border-radius: 5px;
  height: 1.5rem;
  line-height: 1.5rem;
  padding-left: 0.5rem;
  background-color: #f2f2f2;
  border: none;
}
.mainBox .contentBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 8.3rem;
  padding: 0.5rem;
  top: 14rem;
  left: 0.6rem;
  border-radius: 0.25rem;
  z-index: 5;
}
.mainBox .contentBox .title {
  font-size: 0.8rem;
  color: #232323;
}
.mainBox .contentBox .megBox {
  font-size: 0.65rem;
  color: #999999;
}
.mainBox .contentBox .textBox {
  background-color: #f2f2f2;
  width: 16.375rem;
  height: 4.675rem;
  margin-top: 0.375rem;
  border: none;
  z-index: 13;
}
.mainBox .bottomBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 8.3rem;
  padding: 0.5rem;
  top: 23.325rem;
  left: 0.6rem;
  border-radius: 0.25rem;
  z-index: 5;
}
.mainBox .bottomBox .title {
  font-size: 0.8rem;
  color: #232323;
}
.mainBox .bottomBox .megBox {
  font-size: 0.65rem;
  color: #999999;
}
.mainBox .bottomBox .img1Box {
  width: 16.475rem;
  height: 5.675rem;
}
.mainBox .btnBox {
  background-color: #207fc9;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  position: absolute;
  width: 14.575rem;
  height: 2rem;
  line-height: 2rem;
  top: 32.325rem;
  left: 2.1rem;
  border-radius: 0.275rem;
  font-size: 0.8rem;
  color: #FFFFFF;
  text-align: center;
  z-index: 2;
}

 
</style>
