export class Logger {
    static info(message: string) {
        console.log(`[Collab Debug] ${message}`);
    }

    static warn(message: string) {
        console.warn(`[Collab Debug] ${message}`);
    }

    static error(message: string, error?: Error) {
        console.error(`[Collab Debug] ${message}`, error);
    }
}
