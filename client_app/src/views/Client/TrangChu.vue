<template>
    <h2 class="block-title position-relative text-center bold mb-4 mt-3">

        <span class="position-absolute">-Sport-</span>
        <span> SẢN PHẨM NỔI BẬT</span>
    </h2>
    <v-row class="ma-1">
        <v-col v-for="product in products" :key="product.id" cols="12" md="3">
            <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto" max-width="344" min-height="300px">
                    <v-img v-bind="props" class="text-right" :src="product.ProductImage" height="200px" cover>
                        <v-btn v-if="this.$store.state.FavoriteProductForUserId != null" @click="AddFavoriteProduct(product)"
                            icon>
                            <v-icon color="red">{{
                                this.$store.state.FavoriteProductForUserId.some(x => x.ProductId === product.ProductId) ?
                                'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
                            <!-- <p>{{ product.ProductId }}</p> -->
                        </v-btn>
                        <v-btn v-else @click="AddFavoriteProduct(product)" icon>
                            <v-icon color="red">mdi-heart-outline</v-icon>
                        </v-btn>
                        <v-expand-transition>
                            <v-row v-if="isHovering" class="overlay">
                                <v-col cols="6">
                                    <v-btn @click="AddCart(product)" class="rounded-0" color="primary">Thêm giỏ hàng</v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn class="rounded-0" color="secondary">Xem chi tiết</v-btn>
                                </v-col>
                            </v-row>
                        </v-expand-transition>
                    </v-img>

                    <v-card-title>
                        {{ product.ProductName }}
                    </v-card-title>

                    <v-card-subtitle class="mb-5">
                        {{ formatCurrency(product.Price) }}
                    </v-card-subtitle>

                </v-card>
            </v-hover>
        </v-col>
    </v-row>
    <v-btn class="ma-5" style="background-color: #46694f;color: white;" width="200">Xem tất cả</v-btn>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            show: false,
            selection: [],
            products: [],
        }
    },
    methods: {
        getProducts() {
            axios.get("http://localhost:5224/api/Product/UserGetProduct").then(rs => {
                this.products = rs.data
            }).catch(er => {
                alert(er.message)
            })
        },
        formatCurrency(value) {
            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });

            return formatter.format(value);
        },
        AddFavoriteProduct(item) {
            if (this.$store.state.UserId == null) {
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: "Vui lòng đăng nhập",
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                return
            }

            const formData = new FormData();
            formData.append('ProductId', item.ProductId);
            formData.append('UserId', this.$store.state.UserId);
            axios.post('http://localhost:5224/api/FavoriteProduct', formData,{
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(rs => {
                //console.log(rs)

                if (rs.data.status === "Add") {
                    this.$store.commit('setLoginError', {
                        show: true,
                        icon: '$success',
                        content: rs.data.message,
                        color: 'success'
                    });
                    setTimeout(() => {
                        this.$store.commit('clearLoginError');
                    }, 3000);
                }
                else {
                    this.$store.commit('setLoginError', {
                        show: true,
                        icon: '$warning',
                        content: rs.data.message,
                        color: 'warning'
                    });
                    setTimeout(() => {
                        this.$store.commit('clearLoginError');
                    }, 3000);
                }

                this.$store.dispatch('getFavoriteProductForUserId', this.$store.state.UserId)
            }).catch(erro => {
                if(erro.response.statusText==='Unauthorized')
                    this.$store.dispatch('logout')
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
        AddCart(item) {
            if (this.$store.state.UserId == null) {
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: "Vui lòng đăng nhập",
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                return
            }

            const formData = new FormData();
            formData.append('ProductId', item.ProductId);
            formData.append('Quantity', 1);
            formData.append('UserId', this.$store.state.UserId);
            axios.post('http://localhost:5224/api/Cart', formData, {
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(rs => {
                if (rs.data.status === 0) {
                    this.$store.commit('setLoginError', {
                        show: true,
                        icon: '$warning',
                        content: rs.data.message,
                        color: 'warning'
                    });
                    setTimeout(() => {
                        this.$store.commit('clearLoginError');
                    }, 3000);
                }
                else {
                    this.$store.dispatch('getListCart', sessionStorage.getItem('UserId'))
                    this.$store.commit('setLoginError', {
                        show: true,
                        icon: '$success',
                        content: rs.data.message,
                        color: 'success'
                    });
                    setTimeout(() => {
                        this.$store.commit('clearLoginError');
                    }, 3000);
                }


            }).catch(erro => {
                if(erro.response.statusText==='Unauthorized')
                    this.$store.dispatch('logout')
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
        }
    },
    created() {
        this.getProducts()
    }
}
</script>
<style scoped>
.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    justify-content: space-around;
}

.block-title {
    padding: 20px 0;
    font-size: 48px;
}

.position-relative {
    position: relative !important;
}

.block-title span:nth-child(1) {
    font-size: 130px;
    width: 100%;
    opacity: 0.05;
    top: 0;
    left: 50%;
    line-height: 1;
    transform: translateX(-50%);
    letter-spacing: 30px;
}

.position-absolute {
    position: absolute !important;
}

.block-title span:nth-child(2) {
    color: #46694f;
    font-size: 60px;
}
</style>