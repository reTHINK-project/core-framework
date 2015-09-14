pandoc -o annex.md ^
sota\runtime.md ^
..\..\sota\runtime\webrtc-org.md ^
introduction\figures.md



pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. annex.md -o D3.1-annex.docx

