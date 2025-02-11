import * as vscode from 'vscode';
import { DebugSession } from './core/debugSession';
import { WebSocketManager } from './core/websocketManager';
import { SidebarProvider } from './ui/sidebarProvider';
import { Logger } from './utils/logger';

export function activate(context: vscode.ExtensionContext) {
    Logger.info('Activating Collaborative Debug extension');

    const wsManager = new WebSocketManager();
    const sidebarProvider = new SidebarProvider(context.extensionUri);

    let currentSession: DebugSession | undefined;

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            'collabDebug.sessionView',
            sidebarProvider
        ),

        vscode.commands.registerCommand('collabDebug.startSession', async () => {
            // Command implementation
        }),

        vscode.commands.registerCommand('collabDebug.joinSession', async () => {
            // Command implementation
        })
    );
}

export function deactivate() {
    Logger.info('Deactivating Collaborative Debug extension');
}