export interface ISettings {
    SearchProductURL: string;
    DetailProductURL: string;
}

export class Environment implements ISettings {
    SearchProductURL: string;
    DetailProductURL: string;

    constructor(config: ISettings) {
        this.SearchProductURL = config.SearchProductURL;
        this.DetailProductURL = config.DetailProductURL;
    }

}