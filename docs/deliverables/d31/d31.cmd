pandoc -o readme.md ^
introduction\readme.md ^
requirements\readme.md ^
requirements\runtime-requirements.md ^
requirements\messaging-requirements.md ^
requirements\qos-requirements.md ^
requirements\framework-requirements.md ^
sota\readme.md ^
..\..\sota\runtime\runtime-security.md ^
sota\standards.md ^
sota\runtime.md ^
sota\messaging.md ^
sota\service-framework.md ^
sota\projects.md ^
sota\products.md ^
..\..\sota\products\apirtc.md ^
..\..\sota\products\sippo.md ^
specs\runtime.md ^
..\..\specs\runtime\runtime-architecture.md ^
..\..\specs\runtime\securityanalysis.md ^
..\..\specs\runtime\runtime-apis.md ^
specs\runtime-procedures.md ^
specs\runtime-basics.md ^
..\..\specs\runtime\dynamic-view\basics\deploy-runtime.md ^
..\..\specs\runtime\dynamic-view\basics\deploy-protostub.md ^
..\..\specs\runtime\dynamic-view\basics\deploy-hyperty.md ^
..\..\specs\runtime\dynamic-view\basics\bus-msg-routing.md ^
..\..\specs\runtime\dynamic-view\basics\intra-local-comm.md ^
..\..\specs\runtime\dynamic-view\basics\intra-remote-comm.md ^
..\..\specs\runtime\dynamic-view\basics\inter-local-comm.md ^
..\..\specs\runtime\dynamic-view\basics\inter-remote-comm.md ^
specs\runtime-idm.md ^
..\..\specs\runtime\dynamic-view\identity-management\user-registration.md ^
..\..\specs\runtime\dynamic-view\identity-management\discovery.md ^
..\..\specs\runtime\dynamic-view\identity-management\domain-login.md ^
..\..\specs\runtime\dynamic-view\identity-management\user-to-hyperty-binding.md ^
..\..\specs\runtime\dynamic-view\identity-management\user-identity-assertion.md ^
specs\runtime-h2h.md ^
..\..\specs\runtime\dynamic-view\h2h-communication\h2h-intra-comm-1-alice-invites.md ^
..\..\specs\runtime\dynamic-view\h2h-communication\h2h-intra-comm-2-bob-receives-invitation.md ^
..\..\specs\runtime\dynamic-view\h2h-communication\h2h-intra-comm-3-alice-is-aknowledged-invitation-received.md ^
..\..\specs\runtime\dynamic-view\h2h-communication\h2h-intra-comm-4-notification-update.md ^
..\..\specs\runtime\dynamic-view\h2h-communication\h2h-intra-comm-5-bob-webrtc.md ^
..\..\specs\runtime\dynamic-view\h2h-communication\h2h-intra-comm-6-alice-DO-synch.md ^
..\..\specs\runtime\dynamic-view\m2m-communication\m2m-comm-overview.md ^
..\..\specs\runtime\dynamic-view\m2m-communication\m2m-bootstrap-auth-registration.md ^
..\..\specs\runtime\dynamic-view\m2m-communication\m2m-intra-comm-3-discovery.md ^
..\..\specs\runtime\dynamic-view\m2m-communication\m2m-intra-comm-4-pub-sub.md ^
specs\runtime-implementation.md ^
..\..\specs\runtime\implementation\browser-runtime.md ^
..\..\specs\runtime\implementation\standalone-runtime.md ^
..\..\specs\runtime\implementation\gw-runtime.md ^
specs\msg-node.md ^
..\..\specs\msg-node\msg-node-architecture.md ^
..\..\specs\msg-node\vertx_specs.md ^
..\..\specs\msg-node\nodejs_specs.md ^
..\..\specs\msg-node\matrix_specs.md ^
conclusions\readme.md ^
..\..\references\readme.md ^
introduction\figures.md


 pushd ..\..\sota
   for /r %%a in (*.png) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

 pushd ..\..\sota
   for /r %%a in (*.jpg) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

 pushd ..\..\specs
   for /r %%a in (*.png) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

pushd ..\..\specs
   for /r %%a in (*.jpg) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

 pushd ..\deliverables\d31

pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. readme.md -o D3.1-body.docx

