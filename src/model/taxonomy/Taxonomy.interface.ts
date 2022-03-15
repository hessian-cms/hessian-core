export interface Taxonomy {
    type: "FACETED" | "HIERACHIC"
    displayName?: string;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
}

export const TAXONOMY_FACETED: string = "FACETED";
export const TAXONOMY_HIERACHIC: string = "HIERACHIC";