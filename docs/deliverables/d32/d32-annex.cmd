pandoc -o annex.md ^
..\..\..\..\dev-runtime-browser\readme.md ^
..\..\..\..\dev-runtime-browser\standalone-browser-runtime-app\standalone-browser-runtime-application.md ^
..\..\..\..\dev-msg-node-vertx\README.md ^
..\..\..\..\dev-msg-node-matrix\README.md ^
..\..\..\..\dev-msg-node-nodejs\readme.md

pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. annex.md -o D3.2-annex.docx
