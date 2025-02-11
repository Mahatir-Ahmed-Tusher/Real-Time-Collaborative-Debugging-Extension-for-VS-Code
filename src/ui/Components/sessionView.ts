import * as vscode from 'vscode';
import { SessionInfo } from '../../core/types';

export class SessionView {
    constructor(private session: SessionInfo) {}

    public render(): string {
        return `
            <div class="session-view">
                <h2>${this.session.name}</h2>
                <div class="participants">
                    ${this.renderParticipants()}
                </div>
            </div>
        `;
    }

    private renderParticipants(): string {
        return this.session.participants
            .map(user => `<div class="participant">${user.name}</div>`)
            .join('');
    }
}