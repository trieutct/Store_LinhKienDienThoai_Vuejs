<template>
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
</style>