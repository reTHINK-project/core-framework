
pushd ..\..\..\..\dev-service-framework\docs\api\class
  for /r %%a in (*.html) do (
     pandoc  "%%a" -o "%%~na.md"

     more +232 "%%~na.md" > "%%~na.md.new"
     move /y "%%~na.md.new" "%%~na.md"
     pandoc  "%%~na.md" -o ..\..\..\..\core-framework\docs\deliverables\d32\api\framework\%%~na.md"


  )


    pushd ..\..\..\..\core-framework\docs\deliverables\d32\api\framework

    copy /b *.md api.md

    pandoc -s -S api.md --reference-docx ..\..\D3.2-body.docx -o api.docx

    pushd ..\..