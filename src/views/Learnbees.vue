<script setup>
    import { useDisplay } from "vuetify";
    const { xs } = useDisplay();
    const chickalinks = [
        {title: 'New Bees', 
        blurb: 'Advice from the school of hard knocks about beekeeping - might spare you a tough lesson.', 
        buttontext: 'NewBees Enter Here',
        pathname: "Newbees"},
        {title: 'Classes', 
        blurb: 'Materials for beekeeping classes found here', 
        buttontext: 'Class Materials',
        pathname: "Classes"},
        {title: 'Pro Tips', 
        blurb: 'Tips and tricks for getting honey and preventing swarming - the kind of tips that work.', 
        buttontext: 'Pro Tips Here',
        pathname: "Protips"},
    ];
</script>

<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col v-for="(item, i) in chickalinks" :key="i" :cols="xs ? 'auto' : '6'">
                <v-card color="amber-lighten-5">
                    <v-card-item>
                        <v-card-title class="text-purple text-h6 text-sm-h5 font-weight-bold">
                                {{ item.title }}
                        </v-card-title>
                        <v-card-text class="">
                            {{ item.blurb }}
                        </v-card-text>
                            <v-btn :to="{name:item.pathname}" class="text-amber-darken-4 font-weight-bold bg-amber-lighten-3 mx-auto">
                                {{ item.buttontext }}
                            </v-btn>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

        .logo:hover {
            filter: drop-shadow(0 0 2em #646cffaa);
        }

        .logo.vue:hover {
            filter: drop-shadow(0 0 2em #42b883aa);
        }
</style>
