#!/bin/bash

APP_DIR="~/My_Portfolio_Website/my-portfolio"

cd \$APP_DIR
git add .
git commit -m "Automatic Commit"
git push
echo "Pushed latest code to GitHub"
