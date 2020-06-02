<template>
    <div class="loginContainer">
       <div class="box">
           <div class="logonicn">
                <img src="../../images/mingyi/loginIcon.png" alt="">
           </div>
           	<div class="btnBox" @click="gologinphone">
				一键微信登录
			</div>
       </div>
       
    </div>
</template>

<script>
    import {mobileCode, checkExsis, sendLogin, getcaptchas, accountLogin} from '../../service/getData'

    export default {
        data(){
            return {
               
            }
        },
        created(){
        },
        components: {
           
        },
        computed: {
            
        },
        methods: {
            gologinphone(){
                this.$router.push('/loginphone')
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .loginContainer{
            height: 100vh;
            width: 100%;
            background: #ddf5fd;
            display: flex;
            align-items: center;
            justify-content: center;
            .box{
                height: 19rem;
                .logonicn{
                    width: 9rem;
                    margin: 0 auto;
                    img{
                        width: 100%;
                    }
                }
                
                .btnBox{
                    margin-top: 4rem;
                    width: 16rem;
                    border-radius: 5px;
                    height: 2rem;
                    line-height: 2rem;
                    color: #FFFFFF;
                    background-color:rgb(28,198,84);
                    box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
                    font-size: 0.8rem;
                    text-align: center;
                    color: #FFFFFF;
                }
            }
    }

    
</style>
