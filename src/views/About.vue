<script setup lang="ts">
    import { inject, ref } from 'vue';
    import Status from '../models/Status';
    import StatusUpdater from '../models/StatusUpdater';

    const updater = inject<StatusUpdater>('status', new StatusUpdater(ref(Status.Init)));
    const message = ref('Hello')
    function doSomething() {
        updater.updateStatus(Status.Processing);
        setTimeout(function() {
            message.value = 'Woohoo!';
            updater.updateStatus(Status.Active);
        }, 5000);
    }
</script>
<template>
    <div class="page">
        <div>
            About
        </div>
        <div>{{ message }}</div>
        <div>
            <p>Some say a comet will fall from the sky</p>
            <p>Followed by meteor showers and tidal waves</p>
            <p>Followed by fault lines that cannot sit still</p>
            <p>Followed by millions of dumbfounded dipshits</p>
        </div>
        <button @click="doSomething">Waste Time</button>
    </div>
</template>


