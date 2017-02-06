pandoc -o annex.md ^
..\..\..\..\dev-runtime-core\readme.md ^
..\..\..\..\dev-runtime-browser\readme.md ^
..\..\..\..\dev-runtime-browser\standalone-browser-runtime-app\standalone-browser-runtime-application.md ^
..\..\..\..\dev-msg-node-vertx\README.md ^
..\..\..\..\dev-msg-node-matrix\README.md ^
..\..\..\..\dev-msg-node-matrix\Matrix-overview.md ^
..\..\..\..\dev-msg-node-matrix\MatrixMN-internal-architecture.md ^
..\..\..\..\dev-msg-node-nodejs\readme.md


    pushd ..\..\..\..\dev-runtime-browser

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

pushd ..\core-framework\docs\deliverables\d33

pandoc -s -S annex.md --reference-docx annex-reference.docx -o d3.3-annex.docx
