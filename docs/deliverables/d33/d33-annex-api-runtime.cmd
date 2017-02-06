
pushd ..\..\..\..\dev-runtime-core\docs\api\class
  for /r %%a in (*.html) do (
     pandoc  "%%a" -o "%%~na.md"

     more +156 "%%~na.md" > "%%~na.md.new"
     move /y "%%~na.md.new" "%%~na.md"
     pandoc  "%%~na.md" -o ..\..\..\..\core-framework\docs\deliverables\d33\api\runtime\%%~na.md"


  )

  pushd ..\..\..\..\core-framework\docs\deliverables\d33\api\runtime\

  copy /b *.md api.md

  pandoc -s -S api.md --reference-docx ..\..\annex-api-reference.docx -o api.docx

  pushd ..\..
