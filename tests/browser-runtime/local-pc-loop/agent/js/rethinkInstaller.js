import * as config from './configs/config';

var rethink = document.createElement('iframe');
rethink.setAttribute('id', 'rethink-iframe');
rethink.setAttribute('src', config.rethink.server + '/rethink.html');
rethink.setAttribute('seamless', '');
rethink.setAttribute('width', '100%');
rethink.setAttribute('height', '400px');
rethink.setAttribute('sandbox', 'allow-scripts allow-same-origin');

rethink.style.display = 'none';

document.body.appendChild(rethink);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = config.rethink.server + '/dist/rethinkAgent.js';

document.getElementsByTagName('head')[0].appendChild(script);
