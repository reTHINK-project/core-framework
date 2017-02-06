pandoc -o annex.md ^
..\..\..\..\dev-runtime-core\readme.md



pushd ..\core-framework\docs\deliverables\d33

pandoc -s -S annex.md --reference-docx annex-reference.docx -o d3.3-annex-core-runtime.docx
