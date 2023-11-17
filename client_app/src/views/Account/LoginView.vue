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
                                <v-text-field prepend-icon="mdi-account" type="email" v-model="formDangNhap.Username"
                                    label="Tài khoản" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-lock" type="password" v-model="formDangNhap.Password"
                                    label="Mật khẩu" required></v-text-field>
                            </v-col>
                        </v-row>
                        <h5 class="text-center mt-3 mb-3" @click="this.$emit('showFormQuenMatKhau')">Quên mật khẩu?</h5>
                        <v-card-actions class="justify-center">
                            <v-btn class="rounded-0" @click="Login()"
                                style="background-color: #028bda !important;border-color: #028bda;color: white;">Đăng
                                Nhập</v-btn>
                            <v-btn class="rounded-0" @click="this.$emit('close')"
                                style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                        </v-card-actions>
                    </v-window-item>
                    <v-window-item value="DangKy">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-account" v-model="this.formDangKy.Username"
                                    label="Tài khoản" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-lock" v-model="this.formDangKy.Password" label="Mật khẩu"
                                    required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field prepend-icon="mdi-lock" v-model="this.formDangKy.cfPassword"
                                    label="Nhập lại mật khẩu" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-card-actions class="justify-center">
                            <v-btn class="rounded-0" @click="SingUp()"
                                style="background-color: #028bda !important;border-color: #028bda;color: white;">Đăng
                                ký</v-btn>
                            <v-btn class="rounded-0" @click="this.$emit('close')"
                                style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                        </v-card-actions>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    name: 'LoginView',
    data() {
        return {
            tab: null,
            formDangNhap: {
                Username: '',
                Password: ''
            },
            formDangKy: {
                Username: '',
                Password: '',
                cfPassword: ''
            }
        }
    },
    methods: {
        ...mapActions(['login']),
        Login() {
            this.login(this.formDangNhap)
            this.$emit('close')
        },
        SingUp() {
            if (this.formDangKy.Password != this.formDangKy.cfPassword) {
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: "2 mật khẩu không giống nhau",
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                return
            }
            const formData = new FormData();
            formData.append('Username', this.formDangKy.Username);
            formData.append('Password', this.formDangKy.Password);
            axios.post("http://localhost:5224/api/Account/singup", formData).then(rs => {
                if (rs.status === 200) {
                    //alert(rs.data)
                    this.$emit('close')
                    this.$store.commit('setLoginError', {
                        show: true,
                        icon: '$success',
                        content: rs.data,
                        color: 'success'
                    });
                    setTimeout(() => {
                        this.$store.commit('clearLoginError');
                    }, 3000);
                }
            }).catch(erro => {
                if (erro.response.status === 409) {
                    //alert(erro.response.data.message)
                    this.$emit('close')
                    this.$store.commit('setLoginError', {
                        show: true,
                        icon: '$error',
                        content: erro.response.data.message,
                        color: 'error'
                    });
                    setTimeout(() => {
                        this.$store.commit('clearLoginError');
                    }, 3000);
                } else {
                    console.error('Lỗi đăng ký:', error);
                }
            })
        }
    }
}
</script>

<style></style>