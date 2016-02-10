
pushd ..\..\..\..\dev-service-framework\docs\api\class
  for /r %%a in (*.html) do (
     pandoc  "%%a" -o "%%~na.md"



  )

  pushd ..\..\..\..\core-framework\docs\deliverables\d32
