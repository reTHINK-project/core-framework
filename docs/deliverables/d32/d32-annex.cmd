
 pushd ..\..\..\..\dev-service-framework\docs
   for /r %%a in (*.png) do (
      COPY "%%a" "...\..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
   )

   for /r %%a in (*.jpg) do (
      COPY "%%a" "...\..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
   )

 pushd ..\..\..\..\dev-runtime-core\docs\specs
   for /r %%a in (*.png) do (
      COPY "%%a" "...\..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
   )
   for /r %%a in (*.jpg) do (
      COPY "%%a" "...\..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
   )


 pushd ..
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. readme.md -o D3.1-body.docx

GOTO resume1

:resume1
