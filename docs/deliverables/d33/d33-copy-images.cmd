
pushd C:\Projectos\reTHINK\WP3\git\specs\messaging-framework
  for /r %%a in (*.png) do (
     COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
  )

  for /r %%a in (*.jpg) do (
     COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
  )


  pushd C:\Projectos\reTHINK\WP3\git\specs\tutorials
    for /r %%a in (*.png) do (
       COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
    )

    for /r %%a in (*.jpg) do (
       COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
    )

    pushd C:\Projectos\reTHINK\WP3\git\specs\trust-management
      for /r %%a in (*.png) do (
         COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
      )

      for /r %%a in (*.jpg) do (
         COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
      )

      pushd C:\Projectos\reTHINK\WP3\git\specs\legacy-interworking
        for /r %%a in (*.png) do (
           COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
        )

        for /r %%a in (*.jpg) do (
           COPY "%%a" "C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33\%%~nxa"
        )

  pushd C:\Projectos\reTHINK\WP3\git\core-framework\docs\deliverables\d33
