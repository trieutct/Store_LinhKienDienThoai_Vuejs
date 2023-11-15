<template>
    <v-dialog class="custom-dialog" transition="dialog-top-transition" width="500px">
        <v-card class="rounded-0">
            <v-tabs v-model="tab" bg-color="#028bda" align-tabs="center">
                <v-tab value="DangNhap">Đăng Nhập</v-tab>
                <v-tab value="DangKy">Đăng Ký</v-tab>
            </v-tabs>
            <!-- <v-toolbar class="text-center bold-text" style="background-color: #0080dd;color: white;" title="Đăng Nhập">
            </v-toolbar> -->
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="DangNhap">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-account" v-model="formDangNhap.Username" label="Tài khoản" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-lock" v-model="formDangNhap.Password" label="Mật khẩu" required></v-text-field>
                            </v-col>
                        </v-row>
                        <h5 class="text-center mt-3 mb-3">Quên mật khẩu?</h5>
                        <v-card-actions class="justify-center">
                            <v-btn class="rounded-0" @click="DangNhap()"
                                style="background-color: #028bda !important;border-color: #028bda;color: white;">Đăng
                                Nhập</v-btn>
                            <v-btn class="rounded-0"
                                style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                        </v-card-actions>
                    </v-window-item>
                    <v-window-item value="DangKy">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-account" label="Tài khoản" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-lock" label="Mật khẩu" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-lock" label="Nhập lại mật khẩu" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-card-actions class="justify-center">
                            <v-btn class="rounded-0"
                                style="background-color: #028bda !important;border-color: #028bda;color: white;">Đăng
                                ký</v-btn>
                            <v-btn class="rounded-0"
                                style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                        </v-card-actions>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'LoginView',
    data() {
        return {
            tab: null,
            formDangNhap:{
                Username:'',
                Password:''
            },
            formDangKy:{
                Username:'',
                Password:'',
            }
        }
    },
    methods:{
        ...mapActions(['login']),
        DangNhap()
        {
            this.login(this.formDangNhap).then(()=>{
                this.$emit('close')
            })
        }
    }
}
</script>

<style></style>