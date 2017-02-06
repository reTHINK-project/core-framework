pushd introduction
  for /r %%a in (*.png) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d33\%%~nxa"
  )

  for /r %%a in (*.jpg) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d33\%%~nxa"
  )


pushd ..\..\..\..\..\dev-service-framework\docs\manuals
  for /r %%a in (*.png) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d33\%%~nxa"
  )

  for /r %%a in (*.jpg) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d33\%%~nxa"
  )

pushd ..\..\..\dev-runtime-core\docs\specs
  for /r %%a in (*.png) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d33\%%~nxa"
  )
  for /r %%a in (*.jpg) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d33\%%~nxa"
  )


    pushd ..\..\..\dev-runtime-browser

      for /r %%a in (*.png) do (
         COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
      )
      for /r %%a in (*.jpg) do (
         COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
      )

      pushd ..\dev-msg-node-vertx

        for /r %%a in (*.png) do (
           COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
        )
        for /r %%a in (*.jpg) do (
           COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
        )

        pushd ..\dev-msg-node-matrix

        for /r %%a in (*.png) do (
        COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
        )
        for /r %%a in (*.jpg) do (
        COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
        )

        pushd ..\dev-msg-node-nodejs

          for /r %%a in (*.png) do (
             COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
          )
          for /r %%a in (*.jpg) do (
             COPY "%%a" "..\core-framework\docs\deliverables\d33\%%~nxa"
          )
