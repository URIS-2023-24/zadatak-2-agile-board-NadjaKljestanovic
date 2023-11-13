import { Contributor } from "./contributor";

export class TaskDialogData {
    title: string;
    description: string;
    assignee: string;
    estimatedTime: number;
    contributors: Contributor[];
}