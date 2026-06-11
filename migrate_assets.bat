@echo off
setlocal EnableDelayedExpansion
echo ============================================
echo   Pokemon Asset Migration Script
echo   Moving assets to public/images/pokemon/
echo ============================================

set "ROOT=%~dp0"
set "DEST=%ROOT%public\images\pokemon"

:: Create destination dir if missing
if not exist "%DEST%" mkdir "%DEST%"

:: Delete old media_*.jpg files
echo.
echo [1] Removing old media_*.jpg assets...
for %%f in ("%DEST%\media_*.jpg") do (
  del "%%f"
  echo   Deleted: %%~nxf
)

:: Move root-level assets to semantic names
echo.
echo [2] Moving and renaming root assets...

call :move "Ash Aura.jfif"                      "ash-dsa.jpg"
call :move "Bulbasaur close-up (winking).jfif"  "bulbasaur-about.jpg"
call :move "Chikorita i be-leaf in you.jpeg"    "chikorita-signature.jpg"
call :move "Confused Psyduck.jpeg"              "psyduck-confused.jpg"
call :move "Cool Psyduck.jpeg"                  "psyduck-404.jpg"
call :move "Cute Pikachu Close-up.jfif"         "spark-pikachu.jpg"
call :move "Moonlit Gengar avatar.jfif"         "gengar-toggle.jpg"
call :move "Pikachu Crowd Image.jfif"           "pikachu-crowd.jpg"
call :move "Pokemon Tower Stack.jfif"           "pokemon-tower.jpg"
call :move "Snorlax Forest.jpeg"                "snorlax-footer.jpg"
call :move "Squirtle with sunglasses.jpeg"      "squirtle-easteregg.jpg"
call :move "Thunder Pikachu.jfif"              "thunder-pikachu.jpg"

echo.
echo [3] Final asset listing in public\images\pokemon\:
dir /b "%DEST%"

echo.
echo ============================================
echo   Migration complete!
echo ============================================
pause
goto :eof

:move
  set "SRC=%ROOT%%~1"
  set "DST=%DEST%\%~2"
  if exist "!SRC!" (
    if exist "!DST!" del "!DST!"
    move "!SRC!" "!DST!" >nul
    echo   [OK] "%~1" -> "%~2"
  ) else if exist "!DST!" (
    echo   [SKIP] Already at dest: %~2
  ) else (
    echo   [WARN] Not found: "%~1"
  )
goto :eof
