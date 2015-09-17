pandoc -o annex.md ^
sota\standards_annex.md ^
..\..\sota\standards\ietf_rtcweb_wg.md ^
..\..\sota\standards\OMA.md ^
..\..\sota\standards\w3c_webrtc.md ^
..\..\sota\standards\ORTC.md ^
..\..\sota\standards\w3c-app-lifecycle.md ^
..\..\sota\standards\w3c-service-workers.md ^
..\..\sota\standards\w3c-csp2.md ^
..\..\sota\standards\w3c-push.md ^
..\..\sota\standards\http2.md ^
..\..\sota\standards\quic.md ^
..\..\sota\standards\standard_summary.md ^
sota\projects_annex.md ^
..\..\sota\projects\wonder.md ^
..\..\sota\projects\M2M_projects.md ^
..\..\sota\projects\wonder-messages.md ^
sota\runtime_annex.md ^
..\..\sota\runtime\webrtc-org.md ^
..\..\sota\runtime\openwebrtc.md ^
..\..\sota\runtime\v8-javascript-engine.md ^
..\..\sota\runtime\fxos.md ^
..\..\sota\runtime\jitsi.md ^
..\..\sota\runtime\docker.md ^
..\..\sota\runtime\janus-gateway.md ^
..\..\sota\runtime\kurento.md ^
..\..\sota\runtime\docker-arch2.md ^
..\..\sota\runtime\docker-nodejs.md ^
sota\messaging_annex.md ^
..\..\sota\messaging\vertx3.md ^
..\..\sota\messaging\realtimebackends.md ^
..\..\sota\messaging\matrix.md ^
..\..\sota\messaging\rabbitmq.md ^
..\..\sota\messaging\zeromq.md ^
..\..\sota\messaging\redis.md ^
..\..\sota\messaging\xmpp.md ^
..\..\sota\messaging\mqtt.md ^
..\..\sota\messaging\psyc.md ^
..\..\sota\messaging\nodejs.md ^
..\..\sota\messaging\vertx2.md ^
sota\qos_annex.md ^
..\..\sota\qos\coturn.md ^
sota\service-framework_annex.md ^
..\..\sota\web-frameworks\angular-js.md ^
..\..\sota\web-frameworks\backbone-js.md ^
..\..\sota\web-frameworks\meteor.md ^
..\..\sota\web-frameworks\stapesjs.md ^
introduction\figures-annex.md


pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. annex.md -o D3.1-annex.docx

