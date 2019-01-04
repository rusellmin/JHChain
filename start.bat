if not "%~1" == "" (
  set HTTP_PORT=%1
)
if not "%~2" == "" (
  set P2P_PORT=%2
)
if not "%~3" == "" (
  set PEERS=%3
)

npm start