import { Process, Subject } from "../src/hessian"

export const SUBJECT_ADMIN: Subject = {
    name: "SUBJECT_ADMIN",
    attributes: ["admin"]
}

export const SUBJECT_WRITER: Subject = {
    name: "SUBJECT_WRITER",
    attributes: ["writer"]
}

export const VALID_PROCESS_DEMO: Process = {
    startState: "stateDraft",
    stateDraft: {
        displayName: "Draft",
        transitions: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    },
    statePublished: {
        displayName: "Published",
        transitions: [{
            target: "stateArchived",
            allowedAttributes: ["admin"]
        }]
    },
    stateArchived: {
        displayName: "Archived",
        transitions: [{
            target: "stateDraft",
            allowedAttributes: ["admin"]
        }, {
            target: "statePublished",
            allowedAttributes: ["admin"]
        }],
        accessableForAttributes: ["admin"]
    }
}

export const INVALID_PROCESS_ENTRY_PROCESS_DEMO: Process = {
    startState: "stateInvalid",
    stateDraft: {
        displayName: "Draft",
        transitions: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    },
    statePublished: {
        displayName: "Published",
        transitions: [{
            target: "stateArchived",
            allowedAttributes: ["admin"]
        }]
    },
    stateArchived: {
        displayName: "Archived",
        transitions: [{
            target: "stateDraft",
            allowedAttributes: ["admin"]
        }, {
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    }
}

export const INVALID_PROCESS_TARGET_DEMO: Process = {
    startState: "stateDraft",
    stateDraft: {
        displayName: "Draft",
        transitions: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    }
}

export const INVALID_PROCESS_NO_REFERENCE_TO_STATE: Process = {
    startState: "stateDraft",
    stateDraft: {
        displayName: "Draft",
        transitions: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    },
    stateArchived: {
        displayName: "Archived"
    },
    statePublished: {
        displayName: "Published"
    }
}