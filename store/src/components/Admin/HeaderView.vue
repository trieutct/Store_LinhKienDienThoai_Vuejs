<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" permanent location="left" style="background-color: black; color: white;">
      <template v-slot:prepend>
        <v-list-item class="text-white" lines="two" prepend-avatar="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/393746930_290964750414909_5440743625879992477_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U5Udj4IiTwgAX_LKxWd&_nc_ht=scontent.fhan2-4.fna&oh=00_AfArtcmIWAL9x3x7wcCU6D6aw752uTRP9F2jvgwcm56_hw&oe=653753D4"
          title="Triệu TCT" subtitle="--LeO--"></v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item :to="{ name: 'Dashboard' }" prepend-icon="mdi-account-group-outline" title="Dashboard" value="users"></v-list-item>
        <v-list-item :to="{ name: 'CategoryView' }" prepend-icon="mdi-home-city" title="Danh Mục" value="Danh mục"></v-list-item>
        <v-list-item :to="{ name: 'ProductView' }" prepend-icon="mdi-account" title="Sản Phẩm" value="Sản Phẩm"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-toolbar style="background-color: #0995ed !important;" dense app>
        <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-card-text>
          <v-text-field :loading="loading" density="compact" variant="solo" label="Search templates"
            append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-btn color="white" icon>
          <v-badge content="2" color="error">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
              <v-avatar
                image="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/393746930_290964750414909_5440743625879992477_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KY0C-ITP1NoAX-EaPYP&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDueEnOJtq8R5-uV_Fqmen8W02vfShv-pd6XY0ct8mCRg&oe=653A1916"></v-avatar>
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
  },
}
</script>
  
<style></style>
  