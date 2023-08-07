import { Ref } from 'vue';
import Status from './Status';

class StatusUpdater {
    status: Ref<Status>;
    //updateStatus: Function;
    //public get processing(): boolean { return this.status.value !== Status.Active; }

    constructor(status: Ref<Status>) {
        this.status = status;
    }

    updateStatus(newStatus: Status) : void {
        this.status.value = newStatus;
    }

}

export default StatusUpdater;