pandoc -o readme.md ^
introduction\readme.md ^
manuals\readme.md ^
..\..\..\..\dev-service-framework\README.md ^
..\..\..\..\dev-service-framework\docs\manuals\hyperty.md ^
..\..\..\..\dev-service-framework\docs\manuals\hyperty-messaging-framework.md ^
..\..\..\..\dev-service-framework\docs\manuals\p2p-data-sync.md ^
..\..\..\..\dev-service-framework\docs\manuals\hyperty-trust.md ^
..\..\..\..\dev-service-framework\docs\manuals\development-of-hyperties.md ^
..\..\..\..\dev-service-framework\docs\manuals\development-of-apps.md ^
..\..\..\..\dev-service-framework\docs\manuals\development-of-protostubs-and-msg-nodes.md ^
specs\readme.md ^
specs\runtime.md ^
..\..\..\..\dev-runtime-core\docs\specs\readme.md ^
..\..\..\..\dev-runtime-core\docs\specs\securityanalysis.md ^
specs\msg-node.md ^
..\..\..\..\dev-service-framework\docs\specs\msg-node\readme.md ^
specs\messages.md ^
..\..\..\..\dev-service-framework\docs\specs\messages\address-allocation-messages.md ^
..\..\..\..\dev-service-framework\docs\specs\messages\registration-messages.md ^
..\..\..\..\dev-service-framework\docs\specs\messages\data-sync-messages.md



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


    pushd ..\..\..\dev-runtime-browser

      for /r %%a in (*.png) do (
         COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
      )
      for /r %%a in (*.jpg) do (
         COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
      )

      pushd ..\dev-msg-node-vertx

        for /r %%a in (*.png) do (
           COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
        )
        for /r %%a in (*.jpg) do (
           COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
        )

        pushd ..\dev-msg-node-matrix

        for /r %%a in (*.png) do (
        COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
        )
        for /r %%a in (*.jpg) do (
        COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
        )

        pushd ..\dev-msg-node-nodejs

          for /r %%a in (*.png) do (
             COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
          )
          for /r %%a in (*.jpg) do (
             COPY "%%a" "..\core-framework\docs\deliverables\d32\%%~nxa"
          )

pushd ..\core-framework\docs\deliverables\d32
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. readme.md -o D3.2-body.docx

GOTO resume1

:resume1
