<template>
    <v-form @submit.prevent="save()">
        <v-text-field v-model="formdata.Username" label="tài khoản"></v-text-field>
        <v-text-field v-model="formdata.Password" label="Mật khẩu"></v-text-field>
        <v-btn type="submit" color="primary">Thêm</v-btn>
    </v-form>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "TrangChu",
    data() {
        return {
            formdata: {
                Username: '',
                Password: ''
            }
        }
    },
    methods: {
        save() {
            axios.post("http://localhost:5224/api/Login/login", this.formdata).then(rs => {
                console.log(rs.data.token)
                axios.get("http://localhost:5224/api/Product", {
                    headers: {
                        'Authorization': `Bearer ` + rs.data.token,
                    },
                }).then(rs1 => {
                    console.log(rs1.data)
                })
            }).catch(erro => {
                alert(erro)
            })


        },
    }
}
</script>
  
<style></style>