<script lang="ts">
    import { defineComponent, inject, ref } from 'vue';
    import Status from '../models/Status';
    import StatusUpdater from '../models/StatusUpdater';
    import MessageGetter from '../components/MessageGetter.vue';
    
    export default defineComponent({
        inject: {
            status: {
                from: 'status',
                type: StatusUpdater
            }
        },
        components: {
            MessageGetter
        },
        data() {
            return {
                message: 'Hello'
            }
        },
        methods: {
            doSomething() {
                let vue = this;
                this.updater.updateStatus(Status.Processing);
                vue.message = 'Getting message...';
                setTimeout(function() {
                    vue.message = 'Woohoo!';
                    vue.updater.updateStatus(Status.Active);
                }, 5000);
            }
        },
        setup() {
            let updater: StatusUpdater = inject<StatusUpdater>('status', new StatusUpdater(ref(Status.Init)));
            return { updater };
        }
    });
</script>

<template>
    <div class="page">
        <div>
            Home
        </div>
        <div>{{ message }}</div>
        <div>
            <p>Some say a comet will fall from the sky</p>
            <p>Followed by meteor showers and tidal waves</p>
            <p>Followed by fault lines that cannot sit still</p>
            <p>Followed by millions of dumbfounded dipshits</p>
        </div>
        <button @click="doSomething">Waste Time</button>
        <message-getter />
    </div>
</template>