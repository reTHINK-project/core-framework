
pushd C:\Projectos\reTHINK\WP3\git\specs\messaging-framework
  for /r %%a in (*.png) do (
     COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\%%~nxa"
  )

  for /r %%a in (*.jpg) do (
     COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\%%~nxa"
  )




pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. readme.md -o D3.5-messaging-framework-overview.docx

pushd C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5
