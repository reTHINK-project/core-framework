pandoc -o readme.md ^
introduction\readme.md ^
..\..\..\..\dev-service-framework\docs\manuals\readme.md ^
..\..\..\..\dev-service-framework\docs\manuals\start.md ^
..\..\..\..\dev-service-framework\docs\manuals\hyperty.md ^
..\..\..\..\dev-service-framework\docs\manuals\hyperty-messaging-framework.md ^
..\..\..\..\dev-service-framework\docs\manuals\p2p-data-sync.md ^
..\..\..\..\dev-service-framework\docs\manuals\hyperty-trust.md ^
..\..\..\..\dev-service-framework\docs\manuals\development-of-hyperties.md ^
..\..\..\..\dev-service-framework\docs\manuals\development-of-apps.md ^
..\..\..\..\dev-service-framework\docs\manuals\development-of-protostubs-and-msg-nodes.md ^
specs\runtime.md ^
..\..\..\..\dev-runtime-core\docs\specs\readme.md ^
specs\msg-node.md ^
..\..\..\..\dev-service-framework\docs\specs\msg-node\readme.md ^
documentation\readme.md ^
conclusions\readme.md


pushd ..\..\..\..\dev-service-framework\docs\manuals
  for /r %%a in (*.png) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )

  for /r %%a in (*.jpg) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )

pushd ..\..\..\dev-runtime-core\docs\specs
  for /r %%a in (*.png) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )
  for /r %%a in (*.jpg) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )


pushd ..\..\..\core-framework\docs\deliverables\d32
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. readme.md -o D3.1-body.docx

GOTO resume1

:resume1
