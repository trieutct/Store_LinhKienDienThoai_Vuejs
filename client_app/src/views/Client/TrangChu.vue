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
                        <v-btn icon>
                            <v-icon color="red">mdi-heart-outline</v-icon>
                        </v-btn>
                        <v-expand-transition>
                            <v-row v-if="isHovering" class="overlay">
                                <v-col cols="6">
                                    <v-btn class="rounded-0" color="primary">Thêm giỏ hàng</v-btn>
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
                console.log(rs.data)
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