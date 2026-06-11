@echo off
echo =========================================
echo PHASE 1: Asset Fix ^& Build Recovery
echo =========================================

echo 1. Creating public directories...
if not exist "public\images\pokemon" mkdir "public\images\pokemon"

echo 2. Moving and renaming assets...
move "Cute Pikachu Close-up.jfif" "public\images\pokemon\spark-pikachu.jpg"
move "Moonlit Gengar avatar.jfif" "public\images\pokemon\gengar-toggle.jpg"
move "public\images\pokemon\media__1780560625268.jpg" "public\images\pokemon\squirtle-easteregg.jpg"
move "public\images\pokemon\media__1780560625193.jpg" "public\images\pokemon\pokemon-tower.jpg"
move "public\images\pokemon\media__1780560625279.jpg" "public\images\pokemon\ash-dsa.jpg"
move "public\images\pokemon\media__1780560625187.jpg" "public\images\pokemon\bulbasaur-about.jpg"
move "public\images\pokemon\media__1780560625220.jpg" "public\images\pokemon\chikorita-signature.jpg"
move "public\images\pokemon\media__1780561800625.jpg" "public\images\pokemon\snorlax-footer.jpg"
move "public\images\pokemon\media__1780561800593.jpg" "public\images\pokemon\psyduck-404.jpg"

echo 3. Running Next.js Build for Phase 1 verification...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo Build failed! Stopping execution.
    exit /b %ERRORLEVEL%
)

echo 4. Committing Phase 1...
git add public\images\pokemon src\data\pokemon.ts
git commit -m "feat: pokemon asset organization and build recovery"
git push
echo Phase 1 Git Commit:
git rev-parse HEAD

echo =========================================
echo PHASE 2: Portfolio Polish
echo =========================================

echo 1. Running Next.js Build for Phase 2 verification...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo Build failed! Stopping execution.
    exit /b %ERRORLEVEL%
)

echo 2. Committing Phase 2 UI updates...
git add src\components
git commit -m "feat: spark companion, theme toggle, hero alignment and footer redesign"
git push
echo Phase 2 Git Commit:
git rev-parse HEAD

echo =========================================
echo ALL WORKFLOWS COMPLETED SUCCESSFULLY.
echo =========================================
pause
