export interface IEnvironment {
    SearchProductURL: string;
    DetailProductURL: string;
}

export class Environment implements IEnvironment {
    SearchProductURL: string;
    DetailProductURL: string;

    constructor(config: IEnvironment) {
        this.SearchProductURL = config.SearchProductURL;
        this.DetailProductURL = config.DetailProductURL;
    }

}