import { User } from '../../core/types';

export class ParticipantList {
    constructor(private participants: User[]) {}

    public render(): string {
        return `
            <div class="participant-list">
                ${this.participants
                    .map(user => this.renderParticipant(user))
                    .join('')}
            </div>
        `;
    }

    private renderParticipant(user: User): string {
        return `
            <div class="participant" data-id="${user.id}">
                <span class="name">${user.name}</span>
                <span class="role">${user.role}</span>
            </div>
        `;
    }
}