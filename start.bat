@echo off
title Yuri Bot ^| yuribox.xyz
cls
echo.
echo Yuri ^| a multipurpose Discord Bot
echo =================================
echo.
:loop
node bot.js
echo.
echo An Error occured! Restarting the bot...
ping >nul
echo.
echo.
goto loop
