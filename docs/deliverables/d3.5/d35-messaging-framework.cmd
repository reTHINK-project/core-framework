
pushd C:\Projectos\reTHINK\WP3\git\specs\messaging-framework

pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. readme.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-messaging-framework-overview.docx
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. protofly.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-messaging-framework-protofly.docx
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. p2p-data-sync.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-messaging-framework-p2p-data-sync.docx
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. msg-node.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-messaging-framework-msg-node.docx
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. msg-node-design.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-messaging-framework-msg-node-development-recommendations.docx
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. stub-specification.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-messaging-framework-stub-specifications.docx
pandoc --filter pandoc-citeproc -f markdown -t docx --data-dir=. p2p-msg-delivery.md -o C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5\D3.5-p2p-msg-delivery.docx

pushd C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d3.5
