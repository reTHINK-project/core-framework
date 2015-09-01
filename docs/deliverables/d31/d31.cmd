pandoc -o D3.1-Hyperty-Runtime-and-Hyperty-Messaging-Node-Specification.md ^
introduction\readme.md ^
requirements\readme.md ^
sota\readme.md ^
..\..\sota\runtime\runtime-security.md ^
sota\projects.md ^
sota\runtime.md ^
sota\standards.md ^
..\..\specs\readme.md ^
..\..\specs\runtime\readme.md ^
..\..\specs\runtime\runtime-architecture.md ^
..\..\specs\runtime\runtime-apis.md ^
..\..\specs\runtime\dynamic-view\readme.md ^
..\..\specs\runtime\dynamic-view\basics\readme.md ^
..\..\specs\runtime\dynamic-view\basics\deploy-runtime.md ^
..\..\specs\runtime\dynamic-view\basics\deploy-protostub.md

 pushd ..\..\sota
   for /r %%a in (*.png) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

 pushd ..\..\sota
   for /r %%a in (*.jpg) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

 pushd ..\..\specs
   for /r %%a in (*.png) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

pushd ..\..\specs
   for /r %%a in (*.jpg) do (
      COPY "%%a" "..\deliverables\d31\%%~nxa"
   )

 pushd ..\deliverables\d31

pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. D3.1-Hyperty-Runtime-and-Hyperty-Messaging-Node-Specification.md -o D3.1-body.docx


