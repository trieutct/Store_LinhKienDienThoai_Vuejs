<template>
  <v-carousel height="500px" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name:'CarouselView',
    data () {
      return {
        items: [
          {
            src: 'https://cdn-v2.didongviet.vn/files/banners/2023/10/16/1/1700126529185_15_pro_max_824x400.jpg',
          },
          {
            src: 'https://cdn-v2.didongviet.vn/files/banners/2023/10/7/1/1699355263120_final_824x400.png',
          },
          {
            src: 'https://cdn-v2.didongviet.vn/files/banners/2023/10/2/1/1698909730327_xiaomi_13t_824x400.jpg',
          },
          {
            src: 'https://cdn-v2.didongviet.vn/files/banners/2023/9/4/1/1696388609214_main_824x400.jpg',
          },
          {
            src: 'https://cdn-v2.didongviet.vn/files/banners/2023/10/16/1/1700132634763_main_banner_1.jpg',
          },
        ],
      }
    },
}
</script>

<style>

</style>