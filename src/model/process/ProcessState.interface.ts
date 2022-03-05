import ProcessStateTransition from "./ProcessStateTransition.interface";

export default interface ProcessState {
    name: string,
    transitions?: ProcessStateTransition[]
}