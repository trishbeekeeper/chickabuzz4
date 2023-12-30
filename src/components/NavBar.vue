<script setup>
    import { useDisplay } from "vuetify";
    const { xs } = useDisplay();
    import { useRouter } from "vue-router";
    const router = useRouter();
</script>
<template>
    <v-card class="mx-auto">
        <v-layout>
            <v-app-bar density="compact"
                       color="amber-lighten-4">
                <v-row align="center" justify="center">
                    <v-col cols="auto">
                        <v-btn v-if="xs" color="amber-darken-4"
                               variant="outlined"
                               class="px-1 mr-1" :to="{name:'Honey'}">Honey+</v-btn>
                        <v-btn v-if="!xs" color="amber-darken-4"
                               variant="outlined" class="mr-3" :to="{name:'Honey'}"> Honey </v-btn>
                        <v-btn v-if="!xs" color="amber-darken-4"
                               variant="outlined" class="mr-3" :to="{name:'Beeswax'}"> Beeswax </v-btn>
                        <v-btn v-if="!xs" color="amber-darken-4"
                               variant="outlined" class="mr-3" :to="{name:'Mead'}"> Mead </v-btn>
                        <v-btn :to="{name:'HomeView'}" style="font-family: Georgia; color: purple; font-weight:bold" class="px-1">
                            Chickabuzz
                        </v-btn>

                        <v-btn v-if="xs" color="amber-darken-4"
                               variant="outlined"
                               class="px-1 ml-1">
                            Learn Bees
                        </v-btn>
                        <v-btn v-if="!xs" color="amber-darken-4"
                               variant="outlined" class="ml-3" :to="{name:'Newbees'}"> New Bees </v-btn>
                        <v-btn v-if="!xs" color="amber-darken-4"
                               variant="outlined" class="ml-3" :to="{name:'Classes'}"> Classes </v-btn>
                        <v-btn v-if="!xs" color="amber-darken-4"
                               variant="outlined" class="ml-3" :to="{name:'Althives'}"> Alt Hives </v-btn>

                    </v-col>
                </v-row>
            </v-app-bar>
        </v-layout>
    </v-card>
</template>