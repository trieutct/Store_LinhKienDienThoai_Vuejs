<template>
    <!-- <v-app-bar app color="pink" dark>
        <v-icon></v-icon>
        <v-toolbar-title>Leo TCT</v-toolbar-title>
        <v-btn text class="ml-2">Movies</v-btn>
        <v-btn text class="ml-2">Movies</v-btn>
        <v-btn text class="ml-2">Movies</v-btn>
        <v-btn text class="ml-2">Movies</v-btn>
        <v-spacer></v-spacer>
        <v-autocomplete clearable hide-no-data hide-selected color="white" label="Search" prepend-inner-icon="search"
            flat></v-autocomplete>
        <v-btn icon>
            <v-badge color="green" content="22" overlap>
                <v-icon>mdi-bell</v-icon>
            </v-badge>
        </v-btn>
        <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
            <v-avatar size="40">
                <v-img
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/346628852_3569157126677660_806125988768809013_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmnqkEAUG317vRuDrE1X92Vs72jQar-UhWzvaNBqv5SNZSzCPhGGkU81DYnd5tZXzQzeza2u_aGP3UGpQidLb4&_nc_ohc=DSkVCxHZHzEAX9KP0aO&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDHRFCVss00BfFpUtmuj1qI-0EmLXF3EcRq9ayo-8I4gw&oe=6547FD03"></v-img>
            </v-avatar>
        </v-badge>
    </v-app-bar> -->
    <v-app-bar style="background-color: #0995ed !important;" class="text-white">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-items>
            <v-btn>Hire me</v-btn>
            <v-btn>Blog</v-btn>
            <v-btn>
                <v-icon>mdi-cat</v-icon>
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-autocomplete hide-no-data hide-selected color="white" label="Search" prepend-inner-icon="search"
            flat></v-autocomplete>
        <v-btn>
            <v-badge floating content="5" color="red">
                <v-icon>mdi-cart</v-icon>
            </v-badge>
        </v-btn>
        <v-btn>
            <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            drawer: null
        }
    }
}
</script>

<style></style>