export interface User {
    id: string;
    name: string;
    role: 'admin' | 'contributor' | 'viewer';
    avatarUrl?: string;
}

export interface DebugState {
    variables: Record<string, any>;
    callStack: string[];
    breakpoints: Breakpoint[];
}

export interface Breakpoint {
    id: string;
    filePath: string;
    lineNumber: number;
    condition?: string;
    hitCount?: number;
}

export interface ChatMessage {
    id: string;
    userId: string;
    content: string;
    timestamp: number;
    type: 'text' | 'system' | 'debug-event';
}

export interface SessionInfo {
    id: string;
    name: string;
    createdBy: User;
    participants: User[];
    startTime: number;
}