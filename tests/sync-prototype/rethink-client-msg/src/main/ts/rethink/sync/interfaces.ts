export var Type = {
    REPLY:      'reply'
}

export var Code = {
    OK:         'ok',
    ERROR:      'error'
}

export interface Message {
    header: any;
    body?: any;

    reply?: (code: string, desc?: string) => void;
}

export interface IConnection {
    serverURL: string;
    
    send(msg: Message): void;
    onMessage(callback: (Message) => void);
    close(): void;
}