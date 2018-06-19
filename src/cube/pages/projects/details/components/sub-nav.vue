<style lang='less' scope>
.sub-nav {
  width:100%;
  height: 34px;
  line-height: 34px;
  background: #f6f6f6;
  font-size: 13px;
  border-bottom: solid 1px #d4d4d4;
  ul {
    li {
      float: left;
      margin-right: 22px;
      a {
        display: block;
        padding: 0 20px;
        height: 34px;
        color: #999999;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        &:hover,
        &.router-link-active {
          color: #2b2833;
          border-bottom: solid 2px #2b2833;
        }
      }
    }
  }
}

</style>
<template>
    <div class="sub-nav">
        <ul>
            <li v-for="item in data" :key="item.name">
                <router-link :to="item.path">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "sub-nav",
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>