@echo off
echo ================================================
echo  STEP 1: Migrating Pokemon assets...
echo ================================================
call "%~dp0migrate_assets.bat" 2>nul || (
  echo Asset migration bat not found, trying node...
  node "%~dp0migrate_assets.js" 2>nul || echo WARNING: Could not migrate assets automatically. Please run migrate_assets.bat manually.
)

echo.
echo ================================================
echo  STEP 2: Running npm build...
echo ================================================
cd /d "%~dp0"
call npm run build

if %ERRORLEVEL% EQU 0 (
  echo.
  echo ================================================
  echo  BUILD PASSED! All done.
  echo ================================================
) else (
  echo.
  echo ================================================
  echo  BUILD FAILED - check errors above
  echo ================================================
)
pause
