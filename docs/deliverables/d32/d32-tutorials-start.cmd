
pushd ..\..\..\..\dev-service-framework\docs\manuals
  for /r %%a in (*.png) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )

  for /r %%a in (*.jpg) do (
     COPY "%%a" "..\..\..\core-framework\docs\deliverables\d32\%%~nxa"
  )




pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. start.md -o D3.2-tutorials-start.docx

pushd ..\..\..\core-framework\docs\deliverables\d32
