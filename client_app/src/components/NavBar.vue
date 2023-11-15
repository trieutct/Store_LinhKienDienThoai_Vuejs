<template>
    <v-app-bar style="background-color: #000 !important;" class="text-white">
        <v-toolbar-items>
            <v-btn>Trang Chủ</v-btn>
            <v-btn>Giới Thiệu</v-btn>
            <!-- <v-btn>
                <v-icon>mdi-cat</v-icon>
            </v-btn> -->
            <v-btn>Sản Phẩm</v-btn>
            <v-btn>Liên Hệ</v-btn>
            <v-btn>Tin Tức</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-autocomplete hide-no-data hide-selected color="white" label="Search" prepend-inner-icon="search"
            flat></v-autocomplete>
        <v-btn v-if="this.$store.state.token != null">
            <v-menu open-on-hover width="500px" height="500px">
                <template v-slot:activator="{ props }">
                    <v-badge v-bind="props" floating content="5" color="red">
                        <v-icon>mdi-cart</v-icon>
                    </v-badge>
                </template>
                <v-list class="mt-3">
                    <v-list-item>
                        <!-- <template v-slot:prepend>
                            <v-icon icon="mdi-account-circle"></v-icon>
                        </template>
                        <v-list-item-title style="cursor: pointer;">Thông tin tài khoản</v-list-item-title> -->
                        <v-card>
                            <v-row>
                                <v-col cols="12">
                                    <span style="color: #a79e9ecc;">Sản phẩm mới thêm</span>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-img width="50" height="50" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=1gOsdaXgIkUAX_1gkhS&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBxlcGiR14A-PNRfMz9Tmqsb7i9mQiGj_fOxaxVDPW2gg&oe=6558ED85"></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <span>Bộ sản phẩm chăm sóc da làm sạch & bảo vệ toàn diện cho nam Men Stay Simplicity Starter Duo: Sữa rửa mặt x Kem dưỡng ẩm</span>
                                </v-col>
                                <v-col cols="3">
                                    <v-card-text>đ450.000</v-card-text>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-img width="50" height="50" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=1gOsdaXgIkUAX_1gkhS&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBxlcGiR14A-PNRfMz9Tmqsb7i9mQiGj_fOxaxVDPW2gg&oe=6558ED85"></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <span>Bộ sản phẩm chăm sóc da làm sạch & bảo vệ toàn diện cho nam Men Stay Simplicity Starter Duo: Sữa rửa mặt x Kem dưỡng ẩm</span>
                                </v-col>
                                <v-col cols="3">
                                    <v-card-text>đ450.000</v-card-text>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-img width="50" height="50" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=1gOsdaXgIkUAX_1gkhS&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBxlcGiR14A-PNRfMz9Tmqsb7i9mQiGj_fOxaxVDPW2gg&oe=6558ED85"></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <span>Bộ sản phẩm chăm sóc da làm sạch & bảo vệ toàn diện cho nam Men Stay Simplicity Starter Duo: Sữa rửa mặt x Kem dưỡng ẩm</span>
                                </v-col>
                                <v-col cols="3">
                                    <v-card-text>đ450.000</v-card-text>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-img width="50" height="50" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=1gOsdaXgIkUAX_1gkhS&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBxlcGiR14A-PNRfMz9Tmqsb7i9mQiGj_fOxaxVDPW2gg&oe=6558ED85"></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <span>Bộ sản phẩm chăm sóc da làm sạch & bảo vệ toàn diện cho nam Men Stay Simplicity Starter Duo: Sữa rửa mặt x Kem dưỡng ẩm</span>
                                </v-col>
                                <v-col cols="3">
                                    <v-card-text>đ450.000</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-btn v-if="this.$store.state.token == null" @click="this.showformLogin = true">
            Đăng Nhập
        </v-btn>
        <v-btn v-if="this.$store.state.token != null">
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                        <v-avatar
                            image="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=1gOsdaXgIkUAX_1gkhS&_nc_ht=scontent.fhan2-3.fna&oh=00_AfApdS7AoliArKQW4d8iVAZKH_CZ8gM24qsY83Vy_-I5Yg&oe=6557CF03"></v-avatar>
                    </v-btn>
                </template>
                <v-list class="mt-3">
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account-circle"></v-icon>
                        </template>
                        <v-list-item-title style="cursor: pointer;">Thông tin tài khoản</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cart"></v-icon>
                        </template>
                        <v-list-item-title style="cursor: pointer;">Đơn hàng của bạn</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-lock"></v-icon>
                        </template>
                        <v-list-item-title style="cursor: pointer;">Đổi mật khẩu</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-logout"></v-icon>
                        </template>
                        <v-list-item-title @click="this.$store.dispatch('logout')" style="cursor: pointer;">Đăng
                            xuất</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
    </v-app-bar>
    <LoginView @showFormQuenMatKhau="showFormQuenMatKhau" @close="closeFormLogin" v-model="this.showformLogin" />

    <form-quen-mat-khau  @close="closeFormQuenMatKhau" v-model="isShowFormQuenMatKhau"/>
</template>
<script>
import FormQuenMatKhau from '@/views/Account/FormQuenMatKhau.vue'
import LoginView from '@/views/Account/LoginView.vue'
export default {
    components: { LoginView,FormQuenMatKhau },
    name: 'NavBar',
    data() {
        return {
            drawer: null,
            showformLogin: false,
            items: [
                { title: 'Trịnh Công Triệu' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
            isShowFormQuenMatKhau:false
        }
    },
    methods: {
        closeFormLogin() {
            this.showformLogin = false
        },
        closeFormQuenMatKhau(){
            this.isShowFormQuenMatKhau=false
        },
        showFormQuenMatKhau()
        {
            this.isShowFormQuenMatKhau=true,
            this.closeFormLogin()
        }
    }
}
</script>

<style></style>