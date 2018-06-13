<template>
  <div class="perview-body">
    <h1>{{options.type}}</h1>
    <div :id="id" style="text-align:left"></div>
  </div>
</template>
<style lang="less" scoped>
  .perview-body{
    h1{
      position:absolute;
      top:0px;
      left: 20px;
      height: 30px;
      line-height: 30px;
      font-size:14px;
    }
  }
</style>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'

export default {
  name: 'EvCodeMirror',
  props: { options: { type: Object } },
  data() {
    return { 
        codeMirror: null, 
        id: ``,
        allOptions:{
            lineNumbers:true,//显示行号
            lineWrapping:true,//代码折叠
            matchBrackets:true,//括号匹配
            indentUnit:2,//缩进单位，默认为2
            smartIndent:true, //设置是否根据上下文自动缩进（和上一行相同的缩进量），默认为2
            tabSize:2,//tab字符的宽度，默认为4
        }
    }
  },
  mounted() {
    /**************/
    this.id = this.options.id
    let options = $.extend(true,this.allOptions,this.options)
    import(`codemirror/theme/${options.theme}.css`)
    import(`codemirror/mode/${options.mode}/${options.mode}`).then(() => {
      this.codeMirror = CodeMirror(document.getElementById(this.id), options)
    })
  },
  methods:{
      getInput:function(){
        //   console.log(this.codeMirror.getValue())
          return this.codeMirror.getValue()
      }
  }
}
</script>