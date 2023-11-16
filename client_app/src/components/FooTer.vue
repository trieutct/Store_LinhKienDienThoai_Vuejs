<template>
    <v-footer style="background-color: #222222 !important;" 
    class="text-white"
  >
    <v-container class="ma-0">
      <v-row width="100%">
      <v-col cols="6">
        <v-img width="100" height="100" src="https://bizweb.dktcdn.net/100/494/200/themes/918976/assets/logo_footer.png?1699863052785"></v-img>
        <h2 class="text-left">Cửa Hàng Phân Phối Phụ Kiên Chính Hãng</h2>
        <p class="text-left mt-3">Thụy Trình - Thái Thụy - Thái Bình</p>
        <p class="text-left mt-3">0941590356</p>
        <p class="text-left mt-3">trinhcongtrieu2972002@gmail.com</p>
        <p class="text-left mt-3">https://www.facebook.com/trinhcong.trieu</p>
        <h4 class="text-left mt-5">Bản quyền thuộc về Trịnh Công Triệu</h4>
      </v-col>
      <v-col cols="6">
        <v-table  style="background-color: #222222 !important;">
          <thead>
            <tr>
              <th><h4 class="text-white">Về Chúng Tôi</h4></th>
              <th><h4 class="text-white">Chính sách</h4></th>
              <th><h4 class="text-white">Tư vấn khách hàng</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class=" text-left text-white">Trang Chủ</td>
              <td class=" text-left text-white">Chính sách đối tác</td>
              <td class=" text-left text-white">Mua hàng hotline:1800000</td>
            </tr>
            <tr>
              <td class=" text-left text-white">Giới thiệu</td>
              <td class=" text-left text-white">Chính sách đối trả</td>
              <td class=" text-left text-white">Bảo hành .............</td>
            </tr>
            <tr>
              <td class=" text-left text-white">Sản Phẩm</td>
              <td class=" text-left text-white">Chính sách thanh toán</td>
              <td class=" text-left text-white">Khiếu nại ..........</td>
            </tr>
            <tr>
              <td class=" text-left text-white">Hệ thống cửa hàng</td>
              <td class=" text-left text-white">Chính sách giao hàng</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
    name:'FooTer',
    data()
    {
        return{
            icons:['mdi-facebook','mdi-twitter','mdi-linkedin','mdi-instagram']
        }
    }
}
</script>

<style>

</style>