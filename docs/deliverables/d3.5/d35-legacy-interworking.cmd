
pushd C:\Projectos\reTHINK\WP3\git\specs\legacy-interworking

pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. readme.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-legacy-interworking.docx

pushd C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5
