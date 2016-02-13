pandoc -o readme.md ^
specs\readme.md ^
..\..\..\..\dev-runtime-core\docs\specs\readme.md ^
..\..\..\..\dev-runtime-core\docs\specs\securityanalysis.md ^
..\..\..\..\dev-service-framework\docs\specs\msg-node\readme.md


pushd ..\..\..\..\dev-service-framework\docs\manuals
  for /r %%a in (*.png) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )

  for /r %%a in (*.jpg) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )

  pushd ..\specs
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
