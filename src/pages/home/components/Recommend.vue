<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
        title: '西溪国家湿地洪园',
        desc: '西溪国家湿地洪园西溪国家湿地洪园西溪国家湿地洪园'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/e0/e0e0c6ca274ad49aa3.img.jpg_200x200_0f072efb.jpg',
        title: '西溪国家湿地公园·周家村',
        desc: '西溪国家湿地公园·周家村西溪国家湿地公园·周家村'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
        title: '印象西湖',
        desc: '印象西湖印象西湖印象西湖'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_200x200_38791bd1.jpg',
        title: '千岛湖',
        desc: '千岛湖千岛湖千岛湖千岛湖'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: auto
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .1rem
      border-radius: .06rem
      color: #fff
</style>
