<script setup>
    import { useDisplay } from "vuetify";
    import { computed } from "vue";
    import Wheretobuy from "../components/Wheretobuy.vue";
    const { xs } = useDisplay();
    const chickalinksXs = [
        {title: 'Honey', 
        blurb: 'Chickabuzz honey is pure and raw - not to mention delicious!', 
        buttontext: 'Where to buy',
        pathname: "Honey"},
        {title: 'Beeswax Candles', 
        blurb: 'Made from Chickabuzz beeswax, these candles burn beautifully.', 
        buttontext: 'Where to buy',
        pathname: "Beeswax"},
        {title: 'Mead',
        blurb: 'The first fermented drink (probably)! Mead is wine made from honey', 
        buttontext: 'How to Brew',
        pathname: "Mead"}
    ];
    const chickalinksProducts = [
        {title: 'Quart jar', 
        image: 'Chickabuzz honey is pure and raw - not to mention delicious!'
        }
    ];
    const pageSubtitle = computed(() => xs.value ? 
    'Honey, Beeswax Candles and Mead, Oh My!' : 
    'Got Pure and Raw Chickabuzz Honey?');
</script>

<template>
    <v-sheet
    color="amber-lighten-3"
    class="d-flex align-center justify-center text-center mx-auto pt-8 pt-sm-0"
    elevation="4"
    rounded
    min-height="70"
    >
        <div style="font-family: Georgia;" class="text-purple text-h6 text-sm-h5 font-weight-bold px-10">
            {{ pageSubtitle }}
        </div>
     </v-sheet>
    <v-container>
        <div v-if="!xs">
        <Wheretobuy/></div>
        <v-row v-if="xs" align="center" justify="center">
            <v-col v-for="(item, i) in chickalinksXs" :key="i" :cols="xs ? 'auto' : '6'">
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
        <v-row v-else align="center" justify="center">
            <v-col>
                <v-card color="amber-lighten-5">
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
