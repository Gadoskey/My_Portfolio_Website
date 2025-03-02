# Install dependencies and build the Next.js app

cd ~/My_Portfolio_Website/my-portfolio

npm install
npm run build

pm2 start ecosystem.config.js
pm2 save
pm2 startup

pm2 list

echo "Next.js app deployment completed successfully!"
