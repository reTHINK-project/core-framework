
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. ^
specs\messages.md ^
..\..\..\..\dev-service-framework\docs\specs\messages\address-allocation-messages.md ^
..\..\..\..\dev-service-framework\docs\specs\messages\registration-messages.md ^
..\..\..\..\dev-service-framework\docs\specs\messages\data-sync-messages.md ^
 -o D3.2-specs-messages.docx
