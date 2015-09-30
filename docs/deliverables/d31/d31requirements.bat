@echo off
del rethink-data-model.json

for /r "." %%F %~n in (*.json) do (	type "%%F" >>rethink-data-model.json

