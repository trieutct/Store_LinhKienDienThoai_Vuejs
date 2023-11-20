<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" permanent location="left"
      style="background-color: rgb(5, 24, 46); color: white;">
      <template v-slot:prepend>
        <v-list-item class="text-white" lines="two"
          prepend-avatar="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=kLq-mcGVoBkAX_S9Z38&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBipYIHJbmU6t7Ej-Pjy35LiYVUWTEMs4mJKhvzdlkLdg&oe=655FB803"
          title="Triệu TCT" subtitle="--LeO--"></v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item :to="{ name: 'Dashboard' }" prepend-icon="mdi-account-group-outline" title="Dashboard"
          value="users"></v-list-item>
        <v-list-item :to="{ name: 'CategoryView' }" prepend-icon="mdi-home-city" title="Danh Mục"
          value="Danh mục"></v-list-item>
        <v-list-item :to="{ name: 'ProductView' }" prepend-icon="mdi-account" title="Sản Phẩm"
          value="Sản Phẩm"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-toolbar style=" background-color: rgb(5, 24, 46);" dense app height="60">
        <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-card-text>
          <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
            append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
        </v-card-text>
        <v-spacer></v-spacer>
        <p class="text-white ma-2">{{ this.currentDateTime }}</p>

        <v-btn color="white" icon>
          <v-badge content="2" color="error">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
              <v-avatar
                image="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=kLq-mcGVoBkAX_S9Z38&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBipYIHJbmU6t7Ej-Pjy35LiYVUWTEMs4mJKhvzdlkLdg&oe=655FB803"></v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title style="cursor: pointer;">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <router-view />
    </v-main>
  </v-layout>
</template>
  
<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      drawer: true,
      currentDateTime: '',
      items: [
        { title: 'Trịnh Công Triệu' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      loaded: false,
      loading: false,
    };
  },
  methods: {
    onClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
    formatTime: function (time) {
      return time < 10 ? `0${time}` : time;
    },
    // Cập nhật thời gian và ngày tháng năm
    updateDateTime: function () {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1; // Tháng bắt đầu từ 0
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      this.currentDateTime = `${this.formatTime(day)}/${this.formatTime(month)}/${year} ${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
    }
  },
  mounted: function () {
    // Cập nhật thời gian ban đầu
    this.updateDateTime();
    // Cập nhật thời gian mỗi giây
    setInterval(this.updateDateTime, 1000);
  }
}
</script>
  
<style></style>
  