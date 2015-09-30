declare var SockJS: any;
declare module 'cdn/sockjs' {
    export = SockJS
}

declare var getUserMedia: any;
declare module 'lib/adapter' {
    export = getUserMedia
}

