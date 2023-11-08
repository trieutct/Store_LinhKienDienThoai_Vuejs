<template>
    <div class="d-flex flex-row-reverse mb-0">
        <v-sheet style="background-color: #0080dd;color: white;" class="ma-2 pa-2">
            <v-icon class="mdi mdi-plus"></v-icon>
            Thêm mới
        </v-sheet>
        <v-sheet style="background-color: #0080dd;color: white;" class="ma-2 pa-2">
            <v-icon class="mdi mdi-magnify"></v-icon>
            Tìm kiếm
        </v-sheet>
    </div>
    <v-container>
        <v-table class="elevation-1">
            <thead>
                <tr style="background-color: #0080dd;">
                    <th style="color: white;text-align: center;border-right: 1px solid #CCC;">#</th>
                    <th style="color: white;text-align: center;border-right: 1px solid #CCC;">Thao tác</th>
                    <th style="color: white;text-align: center;border-right: 1px solid #CCC;">Họ Và Tên</th>
                    <th style="color: white;text-align: center;border-right: 1px solid #CCC;">Địa Chỉ</th>
                    <th style="color: white; text-align: center;border-right: 1px solid #CCC;">Tuổi</th>
                    <th style="color: white; text-align: center;">Số điện thoại</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border-right: 1px solid #CCC;"><span>1</span></td>
                    <td width="50px" style="border-right: 1px solid #CCC;">
                        <v-menu location="bottom">
                            <template v-slot:activator="{ props }">
                                <v-btn style="color:#0995ed" border class="text-none" variant="text" v-bind="props">
                                    Thao tác
                                    <v-icon icon="mdi mdi-arrow-down-circle-outline" end />
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title style="cursor: pointer;" class="pa-1">
                                        <v-btn style="color:#6809ed" border class="text-none" variant="text">
                                            Sửa thông tin
                                            <v-icon icon="mdi mdi-pencil" end />
                                        </v-btn>
                                    </v-list-item-title>
                                    <v-list-item-title style="cursor: pointer;" class="pa-1">
                                        <v-btn border class="text-none text-red" variant="text">
                                            Xóa
                                            <v-icon icon="mdi mdi-delete" end />
                                        </v-btn>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </td>

                    <th style="border-right: 1px solid #CCC;">Trịnh Công Triệu</th>
                    <td style="border-right: 1px solid #CCC;">Thái Bình</td>
                    <td style="border-right: 1px solid #CCC;">20</td>
                    <td>0941590356</td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script>
export default {
    name: 'TestTable',
    data() {
        return {

        }
    }
}
</script>

<style></style>