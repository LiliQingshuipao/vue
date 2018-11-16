import Vue from "vue";
Vue.ajaxMap = {};
Vue.abort = Vue.prototype.$abort = () => {
  for(let key in Vue.ajaxMap){
      Vue.ajaxMap[key].abort();
      delAjaxMap(Vue, key);
  }
}
function proxy (ajaxParams, ajaxOpt) {
    ajaxOpt = $.extend({
        mock: false,                  //是否读取mock数据,开启后url会加上/mock前缀
        noAbort: false                //默认切换页面会把所有未完成的ajax请求都abort掉,可以指定不abort的请求,比如一些上报接口
    }, ajaxOpt);
    if (ajaxOpt.mock) {
        ajaxParams.url = `/mock${ajaxParams.url}`
    }
    return new Promise((res, req) => {
        const ajaxKey = `${ajaxParams.url}?${JSON.stringify(ajaxParams.data)}`
        ajaxParams = Object.assign({
            url: '',
            dataType:"json",
            type: 'get',
            data:{},
            xhrFields: {
                withCredentials: true
            },
            success: data => {
                if (!data.success && data.code == 1000) {//login false
                  this.$router.push({
                    path: '/login'
                  })
                } else if (!data.success && data.code == 1001) {//no auth
                    // this.$proxy({
                    //   url: "/account/tryLogout",
                    //   type: "post",
                    //   success: data => {
                    //     if (data.success === true) {
                    //       this.$router.push({
                    //         path: '/login'
                    //       })
                    //     }
                    //   }
                    // });
                    this.$router.push("/error?type=1001")
                } else {
                    res(data);
                }

            },
            error: (data) => {
                if (data.statusText != 'abort') {
                    this.$router.push("/error?type=500")
                    // req(data);
                }
            },
            complete: (data, error) => {
                delAjaxMap(Vue, ajaxKey);
            }
        }, ajaxParams);
        const jqxhr = $.ajax(ajaxParams);

        if (!ajaxOpt.noAbort) {
            setAjaxMap(Vue, {
                ajaxKey: ajaxKey,
                jqxhr: jqxhr
            })
        };

    })
}
export const delAjaxMap = (Vue, ajaxKey) => {
    delete Vue.ajaxMap[ajaxKey]
}

export const setAjaxMap = (Vue, config) => {
    Vue.ajaxMap[config.ajaxKey] = config.jqxhr
}
export default proxy
