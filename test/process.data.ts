import { Process } from "../src/hessian"

export const VALID_PROCESS_DEMO: Process = {
    entryProcess: "stateDraft",
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

export const INVALID_PROCESS_ENTRY_PROCESS_DEMO: Process = {
    entryProcess: "stateInvalid",
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
    entryProcess: "stateDraft",
    stateDraft: {
        displayName: "Draft",
        transitions: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    }
}

export const INVALID_PROCESS_NO_REFERENCE_TO_STATE: Process = {
    entryProcess: "stateDraft",
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