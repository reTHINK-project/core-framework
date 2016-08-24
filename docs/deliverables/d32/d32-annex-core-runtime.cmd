pandoc -o annex.md ^
..\..\..\..\dev-runtime-core\readme.md



pushd ..\core-framework\docs\deliverables\d32

pandoc -s -S annex.md --reference-docx annex-reference.docx -o D3.2-annex-core-runtime.docx
