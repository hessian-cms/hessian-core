import ProcessTransition from "./ProcessTransition.interface";

export default interface Process {
    [name:string]: ProcessTransition
}