<template>
    <v-dialog class="custom-dialog" transition="dialog-top-transition" width="500px">
        <v-card class="rounded-0">
            <v-toolbar class="text-center bold-text" style="background-color: #0080dd;color: white;" title="Quên mật khẩu">
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-text-field prepend-icon="mdi-account" label="Tài khoản"
                            required></v-text-field>
                    </v-col>
                </v-row>
                <v-card-actions class="justify-center">
                    <v-btn class="rounded-0" 
                        style="background-color: #028bda !important;border-color: #028bda;color: white;">Submit</v-btn>
                    <v-btn class="rounded-0" @click="this.$emit('close')"
                        style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                </v-card-actions>

            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name:'FormQuenMatKhau'
}
</script>

<style></style>