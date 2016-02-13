pandoc -o annex.md ^
..\..\..\..\dev-runtime-core\readme.md ^
..\..\..\..\dev-runtime-browser\readme.md ^
..\..\..\..\dev-runtime-browser\standalone-browser-runtime-app\standalone-browser-runtime-application.md ^
..\..\..\..\dev-msg-node-vertx\README.md ^
..\..\..\..\dev-msg-node-matrix\README.md ^
..\..\..\..\dev-msg-node-matrix\Matrix-overview.md ^
..\..\..\..\dev-msg-node-matrix\MatrixMN-internal-architecture.md ^
..\..\..\..\dev-msg-node-nodejs\readme.md

pandoc -s -S annex.md --reference-docx annex-reference.docx -o D3.2-annex.docx
