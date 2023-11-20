<template>
    <div style="background-color:#F8F8FF">
        <v-container>
            <v-row>
                <v-col cols="7">
                    <v-row>
                        <v-col cols="6">
                            <v-card bg-color="white" height="70px">
                                <v-row>
                                    <v-col cols="4" class="text-center justify-center">
                                        <v-btn class="ma-2" color="green" icon="mdi-account-circle"></v-btn>
                                    </v-col>
                                    <v-col cols="8">
                                        <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng Khách Hàng</p>
                                        <span style="font-weight: bold;" class="ml-1 text-black">2 khách hàng</span>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card bg-color="white" height="70px">
                                <v-row>
                                    <v-col cols="4" class="text-center justify-center">
                                        <v-btn class="ma-2" color="blue" icon=" mdi-ammunition"></v-btn>
                                    </v-col>
                                    <v-col cols="8">
                                        <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng sản phẩm</p>
                                        <span style="font-weight: bold;" class="ml-1 text-black">2 sản phẩm</span>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card bg-color="white" height="70px">
                                <v-row>
                                    <v-col cols="4" class="text-center justify-center">
                                        <v-btn class="ma-2" color="orange" icon="mdi-bag-personal"></v-btn>
                                    </v-col>
                                    <v-col cols="8">
                                        <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng đơn hàng</p>
                                        <span style="font-weight: bold;" class="ml-1 text-black">2 </span><span>đơn
                                            hàng</span>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card bg-color="white" height="70px">
                                <v-row>
                                    <v-col cols="4" class="text-center justify-center">
                                        <v-btn class="ma-2" color="red" icon="mdi-bell-alert"></v-btn>
                                    </v-col>
                                    <v-col cols="8">
                                        <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Đơn cần duyệt</p>
                                        <span style="font-weight: bold;" class="ml-1 text-black">2</span>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card>
                                <v-card-title style="font-size: 14px;"><strong>Đơn hàng cần duyệt</strong>
                                    <div style="width: 100%; height: 2px;background-color: rgb(216, 216, 136);"></div>
                                </v-card-title>

                                <v-card-text>
                                    <v-table fixed-header height="500px">
                                        <thead>
                                            <tr>
                                                <th>MĐH</th>
                                                <th>Tên KH</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Trịnh Công Triệu</td>
                                                <td>200000đ</td>
                                                <td>
                                                    <v-btn color="success">Duyệt</v-btn>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="5">
                    <v-card>
                        <v-card-title style="font-size: 14px;"><strong>Doanh Thu Tuần Này</strong>
                            <div style="width: 100%; height: 2px;background-color: rgb(216, 216, 136);"></div>
                        </v-card-title>
                        <v-card-text>
                            <DoanhThuTheoTuan />
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import DoanhThuTheoTuan from './DoanhThuTheoTuan.vue';
export default {
    components: { DoanhThuTheoTuan }
}
</script>


<style></style>