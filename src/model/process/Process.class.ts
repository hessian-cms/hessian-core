import { State } from "./State.interface";

export default class ProcessClass {
    constructor(public entryProcess: `state${string}`, public currentState: State, public states: { [key: `state${string}`]: State }) { }

    changeState = () => {
        //get all possible targets
        const targets: string[] = []
        Object.keys(this.states).forEach((value: string) => {
            const state = this.states[value as `state${string}`]
            if (state.transitions) {
                state.transitions.forEach(transition => targets.push(transition.target))
            }
        })
        //if targetstate is possible 
        //check for permissions
        // if (targets.includes(targetState.stateId)) {
        //     this.currentState = targetState
        // }
    }
}