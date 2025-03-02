#!/bin/bash

cd ~/My_Portfolio_Website/my-portfolio
git remote set-url origin git@github.com:Gadoskey/My_Portfolio_Website.git
git add .
git commit -m "Automatic Commit"
git push
echo "Pushed latest code to GitHub"
