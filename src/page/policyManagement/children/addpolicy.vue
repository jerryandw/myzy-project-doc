<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">保单添加</div>
    </div>
    <div id="content" class="mainBox" v-cloak>
	<div class="contentBox">
		<ul>
				<li>
					<div class="titleBox1">保单号</div>
					<div class="inputBox">
                        <span class="cmsb">扫描识别</span>
                        <span>11{{name}}</span>
						<!-- <img class="iconNext" src="../../../images/mingyi/iconNext.png" /> -->
					</div>
				</li>
				<li>
					<div class="titleBox1">投保人姓名</div>
					<div class="inputBox">
						<span>{{sex}}</span>
					</div>
				</li>
				<li>
					<div class="titleBox1">被保险人姓名</div>
					<div class="inputBox">
						<span>{{bordth}}11</span>
					</div>

				</li>
				<li>
					<div class="titleBox1">被保险人身份证</div>
					<div class="inputBox">
						<span>{{phone}}</span>
					</div>
				</li>
                <li>
					<div class="titleBox1">受益人</div>
					<div class="inputBox">
						<span>{{phone}}</span>
					</div>
				</li>
			</ul>
			
			<div class="btnBox">
				保存
			</div>
	</div>
</div>
</div>
</template>

<script>
    import 'src/style/comman.css'
    import headTop from 'src/components/header/head'
    // import {mapState, mapMutations} from 'vuex'
    // import showdown from 'showdown'
    // import BScroll from 'better-scroll'

    export default {
      data(){
            return{
    			name:"",
                sex:"",
                bordth:"",
                phone:""
            }
        },
        components: {
            headTop,
        },
        mounted(){
            
        },
        computed: {
        	// ...mapState([
	        //     'question', 
	        // ]),
	        // markdownText: function (){
            //     //转换markDown格式
	        // 	let converter = new showdown.Converter();  
	        //     return converter.makeHtml(this.question.detail);  
	        // }
        },
        methods: {
            goPageFun(){
               window.history.back(-1); 

            },
            toEditFun(type){
                let src = "";
				switch(type){
					case "name":
						src = "/namesetting";
					break;
					case "sex":
						src = "/sexsetting"
					break;
					case "bordth":
						src = "/bordthsetting"
					break;
					case "phone":
						src = "/phonesetting"
					break;
				}
        		this.$router.push(src)
            }
            
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
//   width: 18.75rem;
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
//   width: 17.55rem;
  height: 17.725rem;
  left: 0.6rem;
  bottom: 1.25rem;
  border-radius: 0.25rem;
  z-index: 3;
}
.maskDiv .payBox .titleBox1 {
//   width: 17.55rem;
  height: 3.25rem;
  line-height: 2.25rem;
  font-size: 0.8rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-color: #4eb92a;
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
.mainBox .contentBox {
  position: absolute;
  width: 18.75rem;
  height: 100vh;
  top: 2.225rem;
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
  margin-right: -0.4rem;
}
.mainBox .contentBox ul li .inputBox .cmsb {
    height: 25px;
    color: #4eb92a;
    border-radius: 5px;
    border: 1px solid #4eb92a;
    line-height: 25px;
    font-size: 0.6rem;
    display: inline-block;
    margin-top: 0.65rem;
    padding: 0 0.2rem;
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
  background-color: #4eb92a;
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


</style>
