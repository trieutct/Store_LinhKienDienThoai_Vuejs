<template>
    <h2 class="block-title position-relative text-center bold mb-4 mt-3">

        <span class="position-absolute">-Sport-</span>
        <span> SẢN PHẨM NỔI BẬT</span>
    </h2>
    <v-row class="ma-1">
        <v-col v-for="product in products" :key="product.id" cols="12" md="3">
            <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto" max-width="344" min-height="300px">
                    <v-img v-bind="props" class="text-right" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200px" cover>
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
                        Top western road trips
                    </v-card-title>

                    <v-card-subtitle class="mb-5">
                        1,000 miles of wonder
                    </v-card-subtitle>

                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    data() {
        return {
            show: false,
            selection: [],
            products: [
                {
                    id: 1,
                    name: "Sản phẩm 1",
                    price: "$19.99",
                    description: "Mô tả sản phẩm 1",
                    image: "link_to_image_1.jpg",
                },
                {
                    id: 2,
                    name: "Sản phẩm 2",
                    price: "$29.99",
                    description: "Mô tả sản phẩm 2",
                    image: "link_to_image_2.jpg",
                }, {
                    id: 1,
                    name: "Sản phẩm 1",
                    price: "$19.99",
                    description: "Mô tả sản phẩm 1",
                    image: "link_to_image_1.jpg",
                },
                {
                    id: 2,
                    name: "Sản phẩm 2",
                    price: "$29.99",
                    description: "Mô tả sản phẩm 2",
                    image: "link_to_image_2.jpg",
                }, {
                    id: 1,
                    name: "Sản phẩm 1",
                    price: "$19.99",
                    description: "Mô tả sản phẩm 1",
                    image: "link_to_image_1.jpg",
                },
                {
                    id: 2,
                    name: "Sản phẩm 2",
                    price: "$29.99",
                    description: "Mô tả sản phẩm 2",
                    image: "link_to_image_2.jpg",
                },
            ],
        }
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
    position: relative!important;
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
    position: absolute!important;
}
.block-title span:nth-child(2) {
    color: #46694f;
    font-size: 60px;
}
</style>