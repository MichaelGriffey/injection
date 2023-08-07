<script setup lang="ts">
    import { inject, ref } from 'vue';
    import Status from '../models/Status';
    import StatusUpdater from '../models/StatusUpdater';

    const updater = inject<StatusUpdater>('status', new StatusUpdater(ref(Status.Init)));
    const message = ref('')
    function getMessage() {
        updater.updateStatus(Status.Processing);
        setTimeout(function() {
            message.value = 'Woohoo!';
            updater.updateStatus(Status.Active);
        }, 5000);
    }
</script>
<template>
    <div>
    <button @click="getMessage">Get Message</button>
    {{ message }}
    </div>
</template>


