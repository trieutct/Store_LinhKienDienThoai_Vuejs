<template>
    <v-dialog transition="dialog-top-transition" width="1200px" :style="{ bottom: '80px' }">
        <v-card class="rounded-0">
            <v-toolbar max-height="60px" class="text-center bold-text" style="background-color: #46694f;color: white;">
                <v-icon left class="mx-6" size="40" color="white">mdi-check-underline-circle-outline</v-icon>
                <h3>Giỏ hàng</h3>
                <v-btn class="ml-auto" icon="mdi mdi-close" @click="this.$emit('close')"></v-btn>
            </v-toolbar>

            <v-card-text v-if="this.$store.state.listCart == null || this.$store.state.listCart.length === 0">
                <p class="text-center text-red">Chưa có sản phẩm nào</p>
            </v-card-text>
            <v-card-text v-else>
                <div class="ma-1">
                    <p>Giỏ hàng bạn đang hiện có <span class="text-red">{{ this.$store.state.listCart.length }}</span> sản
                        phẩm</p>
                    <v-table height="300px" fixed-header class="bottom-border">
                        <thead>
                            <tr>
                                <th >
                                    <p><v-checkbox v-model="selectAll" color="success" class="d-flex align-center justify-center"></v-checkbox></p>
                                </th>
                                <th colspan="1.5">Thông tin sản phẩm</th>
                                <th style="min-width: 150px;">Đơn giá</th>
                                <th style="min-width: 150px;">Số lượng</th>
                                <th style="min-width: 150px;">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cart in this.$store.state.listCart" :key="cart">
                                <td>
                                    <v-checkbox color="success" v-model="chooseListProduct" :value="cart.CartId"></v-checkbox>
                                </td>
                                <td colspan="1.5" max-width="20px">
                                    <v-row class="ma-1">
                                        <v-col cols="2">
                                            <v-img height="80" width="80" :src="cart.Image"></v-img>
                                        </v-col>
                                        <v-col cols="8">
                                            <span style="max-width: 100px;">{{ cart.ProductName }}</span>
                                            <p><v-btn variant="plain" class="text-red">Xóa</v-btn></p>
                                        </v-col>
                                    </v-row>
                                </td>
                                <td>
                                    <span class="text-red">{{ formatCurrency(cart.Price) }}</span>
                                </td>
                                <td>
                                    <button type="button" @click="decrementQuantity(cart)" class="button1">-</button>
                                    <span class="span1">{{ cart.Quantity }}</span>
                                    <button type="button" @click="incrementQuantity(cart)" class="button2">+</button>
                                </td>
                                <td>
                                    <span class="text-red">{{ formatCurrency(cart.Price * cart.Quantity) }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col cols="8">

                    </v-col>
                    <v-col cols="2">
                        <p>Tổng tiền: </p>
                    </v-col>
                    <v-col cols="2">
                        <span class="text-red">{{ formatCurrency(total) }}</span>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-card-actions>
                <v-btn min-width="35%" height="50px" class="ml-auto mr-3"
                    style="background-color: #46694f !important;color: white;">Thanh toán</v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog v-model="showFormThonTin" transition="dialog-top-transition" width="1200px">
        <v-card class="rounded-0">
            <v-toolbar max-height="60px" class="text-center bold-text" style="background-color: #46694f;color: white;">
                <h3>Giỏ hàng</h3>
            </v-toolbar>

            
            <v-card-text >
                <div class="ma-1">
                    
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn min-width="35%" height="50px" class="ml-auto mr-3"
                    style="background-color: #46694f !important;color: white;" @click="this.showFormThonTin=true">Thanh toán</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CartView',
    methods: {
        formatCurrency(value) {
            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return formatter.format(value);
        },
        TinhTongTien() {
            if (this.$store.state.listCart == null || this.$store.state.listCart.length === 0)
                return
            this.total = this.$store.state.listCart.reduce((sum, product) => sum + product.Price * product.Quantity, 0);
        },
        decrementQuantity(item) {
            axios.get('http://localhost:5224/api/Cart/UpdateCart', {
                params: {
                    userId: item.UserId,
                    productId:item.ProductId,
                    status:0
                },
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(()=>{
                this.$store.dispatch('getListCart', this.$store.state.UserId)
                setTimeout(() => {
                    this.TinhTongTien()
                }, 100);
            }).catch(erro=>{
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: erro.message,
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            })
        },
        incrementQuantity(item) {
            //onsole.log(item)
            axios.get('http://localhost:5224/api/Cart/UpdateCart', {
                params: {
                    userId: item.UserId,
                    productId:item.ProductId,
                    status:1
                },
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(()=>{
                this.$store.dispatch('getListCart', this.$store.state.UserId)
                setTimeout(() => {
                    this.TinhTongTien()
                }, 100);
            }).catch(erro=>{
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: erro.message,
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            })
        },
    },
    data() {
        return {
            total: null,
            chooseListProduct:[],
            selectAll:false,
            showFormThonTin:false
        }
    },
    updated() {
        this.TinhTongTien()
    },
    watch:
    {
        chooseListProduct(newvl)
        {
            //console.log(newvl)
        },
        selectAll(newVal)
        {
            if(!newVal)
                return
            this.chooseListProduct = this.$store.state.listCart.map(cart => cart.CartId);
            //console.log(this.chooseListProduct)
        }
    }
}   
</script>

<style scoped>
.bottom-border {
    border-bottom: 1px solid #ddd;
    /* Màu và kiểu đường viền của bạn */
}

.span1 {
    display: inline-block;
    padding: 0;
    text-align: center;
    border-radius: 0;
    width: 35px;
    min-height: 28px;
    border: 1px solid #e5e5e5;
    color: #222;
    height: 28px;
    font-size: 14px;
    margin: 0;
    float: left;
    border-left: none;
    border-right: none;
}

.button1 {
    border-radius: 0;
    border: 1px solid #e5e5e5;
    border-color: #e5e5e5;
    color: #222;
    line-height: 26px;
    padding: 0;
    margin: 0;
    width: 28px;
    background-color: #fff;
    height: 28px;
    float: left;
}

.button2 {
    border-radius: 0;
    border: 1px solid #e5e5e5;
    border-color: #e5e5e5;
    color: #222;
    line-height: 26px;
    padding: 0;
    margin: 0;
    width: 28px;
    background-color: #fff;
    height: 28px;
    float: left;
}
</style>