<script setup>
    import { useDisplay } from "vuetify";
    const { xs } = useDisplay();
    const chickalinks = [
        {title: 'Honey', 
        blurb: 'Chickabuzz honey is pure and raw - not to mention delicious!', 
        buttontext: 'Where to buy',
        pathname: "Honey"},
        {title: 'New Bees', 
        blurb: 'Advice from the school of hard knocks about beekeeping - might spare you a tough lesson.', 
        buttontext: 'NewBees Enter Here',
        pathname: "Newbees"},
        {title: 'Beeswax Candles', 
        blurb: 'Made from Chickabuzz beeswax, these candles burn beautifully.', 
        buttontext: 'Where to buy',
        pathname: "Beeswax"},
        {title: 'Classes', 
        blurb: 'Materials for beekeeping classes found here', 
        buttontext: 'Class Materials',
        pathname: "Classes"},
        {title: 'Mead',
        blurb: 'The first fermented drink (probably)! Mead is wine made from honey', 
        buttontext: 'How to Brew',
        pathname: "Mead"},
        {title: 'Pro Tips', 
        blurb: 'Tips and tricks for getting honey and preventing swarming - the kind of tips that work.', 
        buttontext: 'Pro Tips Here',
        pathname: "Protips"},
    ];
    const homeXsLinks = [
        {title: 'Honey and more!', 
        blurb: 'Pure honey or beeswax candles available, or how to make your own mead (honey wine)!',
        buttontext: 'More Here',
        pathname: "Honeyplus"},
        {title: 'Learn Bees / Class Material', 
        blurb: 'Advice for New Bees, pro tips for not-so-newbees, and class materials', 
        buttontext: 'More Here',
        pathname: "Learnbees"},
    ];
</script>

<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
        <v-img 
        class="bg-white"
        max-height="150"
        src="../../public/flaticon172591.png"
        >
    </v-img>
    </v-col></v-row>
    </v-container>
    <v-sheet
    color="amber-lighten-3"
    class="d-flex align-center justify-center text-center mx-auto"
    elevation="4"
    height="100"
    max-width="600"
    rounded
    >
        <div style="font-family: Georgia;" class="text-purple text-uppercase text-h4 text-sm-h2 font-weight-bold">
            Chickabuzz
        </div>
    </v-sheet>
    <v-container v-if="xs">
        <v-row align="center" justify="center">
            <v-col v-for="(item, i) in homeXsLinks" :key="i" :cols="xs ? 'auto' : '6'">
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
    <v-container v-else>
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
