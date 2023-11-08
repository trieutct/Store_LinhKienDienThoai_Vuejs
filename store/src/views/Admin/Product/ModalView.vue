<template>
    <v-dialog class="custom-dialog"  transition="dialog-top-transition" width="800px">
        <v-card class="rounded-0">
            <v-toolbar class="text-center bold-text" style="background-color: #0080dd;color: white;"
                :title="this.idEdit != null ? 'SỬA SẢN PHẨM' : 'THÊM SẢN PHẨM'"></v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Tên Sản Phẩm" required v-model="this.formData.ProductName"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select v-model="this.formData.CategoryId" :items="this.catergories" item-title="CategoryName" item-value="CategoryId"
                            label="Thuộc danh mục"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Giá bán" required v-model="this.formData.Price"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-file-input ref="fileInput" @change="handleFileChange" accept="image/png, image/jpeg, image/bmp"
                            placeholder="Pick an avatar" prepend-icon="mdi-camera" label="Ảnh"></v-file-input>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea clearable label="Mô tả" v-model="this.formData.Description"></v-textarea>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="background-color: #EFF3F8;" class="justify-center">
                    <v-btn @click="save()" class="rounded-0"
                        style="background-color: #028bda !important;border-color: #028bda;color: white;">{{ this.idEdit != null ? 'Cập nhật' : 'Thêm' }}</v-btn>
                    <v-btn @click="closeDialog()" class="rounded-0"
                        style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import ProductService from '@/Service/ProductService'
import CategoryService from '@/Service/CategoryService'
export default {
    props: {
        idEdit: null
    },
    data() {
        return {
            formData: {
                ProductId: '',
                ProductName: '',
                file: null,
                Description: '',
                Price: '',
                CategoryId:'',
                ProductImage:''
            },
            catergories: []
        }
    },
    created() {
        this.getAllCategories()
    },
    methods: {
        save() {
            //console.log(this.formData)
            this.$emit("save", this.formData)
            this.emtyForm()
        },
        closeDialog() {
            this.$emit("close")
        },
        emtyForm() {
            this.formData.ProductId = '',
            this.formData.ProductName = ''
            this.formData.file = null
            this.formData.Description = ''
            this.formData.Price = '',
            this.formData.ProductImage=''
        },
        handleFileChange(event) {
            this.formData.file = event.target.files[0];
        },
        getAllCategories() {
            CategoryService.getAll(-1).then(rs => {
                this.catergories=rs.data
            })
        }
    },
    watch: {
        idEdit(newValue) {
            if (newValue == null) {
                this.emtyForm()
            }
            else {
                ProductService.getById(newValue).then(rs => {
                    this.formData = rs.data
                    // console.log(this.formData)
                    // console.log(rs.data)
                }).catch(ex => {
                    alert("Lỗi" + ex)
                })
            }
        }
    }
}
</script>
<style scoped>
.custom-dialog {
    position: absolute;
    /* Đặt dialog ở chế độ tuyệt đối */
    top: 0%;
    /* Đặt top với giá trị tùy chỉnh, ví dụ 200px */
    left: 10%;
    /* Đặt left với giá trị tùy chỉnh, ví dụ 300px */
}

.bold-text {
    font-weight: bold;
    /* Đặt kiểu chữ đậm */
}
</style>