#!/bin/bash

# Set up on a new server - install node, nginx and pm2

sudo apt update -y && sudo apt upgrade -y

sudo apt install -y nginx curl

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

sudo npm install -g pm2

sudo systemctl enable nginx
sudo systemctl start nginx

node -v
npm -v
pm2 -v

echo "Installation completed successfully!"

