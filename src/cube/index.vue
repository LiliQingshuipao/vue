<template>
    <div class="cube">
        <!-- <g-header></g-header> -->
        <div class="body">
            <span @click="getParams">run</span>
            <codemirror class="editor" :options="{mode: 'htmlmixed', type:'HTML',theme: 'lucario', id:`CodeMirror_html_${+new Date()}`,}" ref="htmlInput"></codemirror>
            <codemirror class="editor" :options="{mode: 'javascript', type:'JavaScript',theme: 'lucario', id:`CodeMirror_js_${+new Date()}`,}" ref="jsInput"></codemirror>
            <codemirror class="editor" :options="{mode: 'css', type:'CSS', theme: 'lucario', id:`CodeMirror_css_${+new Date()}`}" ref="lessInput"></codemirror>
        </div>
        <div class='perviewBox'>
            <myframe ref="pre"> </myframe>
        </div>
    </div>
</template>
<style <style lang="less" scoped>
    .cube{
        .body{
            height: 100%;
            width:50%;
            display: inline-block;
            float: left;
        }
        .editor{
            width:100%;
            height: 33.3%;
            box-sizing: border-box;
           
            padding-top: 30px;
            position: relative;
        }
        .perviewBox{
            width:50%;
            height: 100%;
            float: right;
            display: inline-block;
            box-sizing:border-box;
        }
    }
</style>

<script>
import codemirror  from '../components/CodeMirror'
import myframe from "../components/perView"
import { parseComponent } from 'vue-template-compiler/browser';
export default {
    components: {
        codemirror,
        myframe
    },
    data(){
        return{
            strLength: 7,
            str: "这是一段测试文字这是一段测试文字这是一段测试文字",
            rawHtml:"Using mustaches:<span style='color:red'>This should be red</span>",
            content:'',
            cmOptions: {
                // codemirror options
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'base16-dark',
                lineNumbers: true,
                line: true,
                // more codemirror options, 更多 codemirror 的高级配置...
            },
            perview:''
            
        }
    },
    methods:{
        doTest:()=>{
            console.log(this)
        },
        doTest1:function(){
            console.log(this)
        },
        getParams:function(){
          let jsInput = this.$refs.jsInput.getInput()
          let less = this.$refs.lessInput.getInput()
          let html = this.$refs.htmlInput.getInput()

        //   let less = this.$refs.lessInput.getInput()
          let params ={
              html: html,
              js:jsInput,
              less:less
          }
          let obj = {
              html:html,
              js:jsInput,
              css:less,
          }
          console.log(obj)
          this.$refs.pre.setHtml(obj)
        //   this.$http.post('/first',params).then(res => {
        //         console.log(res)
        //         this.perview = res.body.name
        //         this.$refs.pre.setHtml(this.perview)
        //         console.log('success')
        //   })
      }
    },
    mounted(){
        // this.doTest()
        // this.doTest1()
    }
}
</script>
