import * as vscode from 'vscode';

export class Config {
    private static readonly SECTION = 'collabDebug';

    static get<T>(key: string): T | undefined {
        return vscode.workspace
            .getConfiguration(this.SECTION)
            .get<T>(key);
    }

    static update(key: string, value: any) {
        return vscode.workspace
            .getConfiguration(this.SECTION)
            .update(key, value, true);
    }
}
