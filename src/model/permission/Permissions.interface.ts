import { Permission } from "./Permission.interface";

export interface Permissions {
    owner: Permission,
    [attribute: string]: Permission
}