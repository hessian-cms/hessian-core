import { Processes } from "../src/hessian"

export const VALID_PROCESS_DEMO: Processes = {
    entryProcess: "stateDraft",
    stateDraft: {
        displayName: "Draft",
        to: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    },
    statePublished: {
        displayName: "Published",
        to: [{
            target: "stateArchived",
            allowedAttributes: ["admin"]
        }]
    },
    stateArchived: {
        displayName: "Archived",
        to: [{
            target: "stateDraft",
            allowedAttributes: ["admin"]
        }, {
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    }
}

export const INVALID_PROCESS_ENTRY_PROCESS_DEMO: Processes = {
    entryProcess: "stateInvalid",
    stateDraft: {
        displayName: "Draft",
        to: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    },
    statePublished: {
        displayName: "Published",
        to: [{
            target: "stateArchived",
            allowedAttributes: ["admin"]
        }]
    },
    stateArchived: {
        displayName: "Archived",
        to: [{
            target: "stateDraft",
            allowedAttributes: ["admin"]
        }, {
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    }
}

export const INVALID_PROCESS_TARGET_DEMO: Processes = {
    entryProcess: "stateDraft",
    stateDraft: {
        displayName: "Draft",
        to: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    }
}

export const INVALID_PROCESS_NO_REFERENCE_TO_STATE: Processes = {
    entryProcess: "stateDraft",
    stateDraft: {
        displayName: "Draft",
        to: [{
            target: "statePublished",
            allowedAttributes: ["admin"]
        }]
    },
    stateArchive: {
        displayName: "Archive"
    },
    statePublished: {
        displayName: "Published"
    }
}