import { Contributor } from "./contributor";

export class Task {
    id: number;
    title: string;
    description: string;
    estimatedTime: number;
    assignee: Contributor;
}