<template>
    <div class="editor-box">
        <!-- <div class="body">
            <span @click="getParams">run</span>
            <codemirror class="editor" :options="{mode: 'htmlmixed', type:'HTML',theme: 'lucario', id:`CodeMirror_html_${+new Date()}`,}" ref="htmlInput"></codemirror>
            <codemirror class="editor" :options="{mode: 'javascript', type:'JavaScript',theme: 'lucario', id:`CodeMirror_js_${+new Date()}`,}" ref="jsInput"></codemirror>
            <codemirror class="editor" :options="{mode: 'css', type:'CSS', theme: 'lucario', id:`CodeMirror_css_${+new Date()}`}" ref="lessInput"></codemirror>
        </div>
        <div class='perviewBox'>
            <myframe ref="pre"> </myframe>
        </div> -->
        <input type="file" @change="fileData"/>
        <button :disabled="data.length ? false : true" class="btn btn-success" @click="_export">Export</button>
    </div>
</template>
<style lang="less" scoped>
.editor-box{
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
// import codemirror  from '../../components/CodeMirror'
import myframe from "../../components/perView"
import { parseComponent } from 'vue-template-compiler/browser';
import XLSX from 'xlsx'
const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));
export default {
    components: {
        // codemirror,
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
            perview:'',
            data:'',
            
        }
    },
    methods:{
        doTest:()=>{
            console.log(this)
        },
        _suppress(evt) { 
            evt.stopPropagation(); 
            evt.preventDefault(); 
        },
        fileData(event){
            var vm = this
            let files = event.target.files
            if(files && files[0]) 
                this._file(files[0]);
        },
        _file(file) {
			/* Boilerplate to set up FileReader */
			const reader = new FileReader();
			reader.onload = (e) => {
				/* Parse data */
				const bstr = e.target.result;
				const wb = XLSX.read(bstr, {type:'binary'});
				/* Get first worksheet */
				const wsname = wb.SheetNames[0];
				const ws = wb.Sheets[wsname];
				/* Convert array of arrays */
				const data = XLSX.utils.sheet_to_json(ws, {header:1});
				/* Update state */
                this.data = [];
                data.forEach(item => {
                    if(item.length){
                        item.forEach(el =>{
                            let temp = ''
                            if(el.match(/\((.+?)\)/g)){
                                temp = el.replace(/\((.+?)\)/g, '')
                            }else if(el.match(/%/)){
                                temp = parseFloat(el)/100
                            }else {
                                temp = el
                            }
                        })
                    }
                    let x = {}
                    let t0 = item[0].replace(/\((.+?)\)/g, '')
                    let t1 = parseFloat(item[1])/100
                    x[t0] = t1
                    this.data.push(x)
                })
                console.log(this.data)

			};
			reader.readAsBinaryString(file);
        },
        _export(evt) {
			/* convert state to workbook */
			// const ws = XLSX.utils.aoa_to_sheet(this.data);
			// const wb = XLSX.utils.book_new();
			// XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
			// /* generate file and send to client */
            // XLSX.writeFile(wb, "sheetjs.xlsx");
            let data = JSON.stringify(this.data)
            this.down(data,'text.json')
        },
        down(content, filename) {
            // 创建隐藏的可下载链接
            var eleLink = document.createElement('a');
            eleLink.download = filename;
            eleLink.style.display = 'none';
            // 字符内容转变成blob地址
            var blob = new Blob([content]);
            eleLink.href = URL.createObjectURL(blob);
            // 触发点击
            document.body.appendChild(eleLink);
            eleLink.click();
            // 然后移除
            document.body.removeChild(eleLink);
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
    }
}
</script>

