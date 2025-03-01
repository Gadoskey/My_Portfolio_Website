#!/bin/bash

cd My_Portfolio_Website/my-portfolio
git pull origin main
npm run build
pm2 restart portfolio