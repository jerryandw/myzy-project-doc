<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">预约详情</div>
    </div>
    <div id="content" class="mainBox">
        <div class="top">
            <ul>
                <li>
                    <span class="boxleft">日期</span>
                    <span class="boxright">{{docObj.rq}}</span>
                </li>
                <li>
                    <span class="boxleft">开始时间</span>
                    <span class="boxright">{{docObj.starttime}}</span>
                </li><li>
                    <span class="boxleft">结束时间</span>
                    <span class="boxright">{{docObj.endttime}}</span>
                </li>
                <li>
                    <span class="boxleft">用户数</span>
                    <span class="boxright">{{docObj.usernum}}</span>
                </li>
                <li>
                    <span class="boxleft">金额</span>
                    <span class="boxright">{{docObj.moenry}}</span>
                </li><li>
                    <span class="boxleft">医院</span>
                    <span class="boxright">{{docObj.hospto}}</span>
                </li>
                <li>
                    <span class="boxleft">科室</span>
                    <span class="boxright">{{docObj.ks}}</span>
                </li>
                <li>
                    <span class="boxleft">详细地址</span>
                    <span class="boxright">{{docObj.dress}}</span>
                </li>
                <li>
                    <span class="boxleft">说明</span>
                    <span class="boxright">{{docObj.sm}}</span>
                </li>
            </ul>
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
                docObj:{
                    rq:"2020-2-20",
                    starttime:'9:00',
                    endttime:'12:00',
                    usernum:'5',
                    moenry:'1000',
                    hospto:'杭州医大',
                    ks:'精神科',
                    dress:'武汉',
                    sm:'sdwddd',
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
					orderTime:"2020-02-18  9:00-10:00  周二  下午",
					time:"今天",
					money:1000,
					},
					{
					orderTime:"2020-02-25  9:00-10:00  周三  上午",
					time:"7天后",
					money:1000,
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
            toOrderFun:function(){
                let src = '/orderConfirm'
                this.$router.push(src)

			}
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
  .mainBox {
  background-color: #f2f2f2;
  height: 100%;
  .top{
    width: 100vw;
    background-color: #f2f2f2;
    box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
    margin-top: 0.5rem;
    ul{
        background: #ffffff;
        li{
            display: flex;
            padding: 0.6rem;
            justify-content: space-between;
            align-items: center;
            height: 2.2rem;
            line-height: 2.2rem;
            border-bottom: 1px solid #e6e6e6;
            .boxleft{
                color: rgb(35,35,35);
                font-size: 0.7rem;
            }
            .boxright{
                color: rgb(140,140,140);
                font-size: 0.7rem;
            }
        }
    }

  }
}


</style>
