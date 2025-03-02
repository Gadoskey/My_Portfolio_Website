# Install dependencies and build the Next.js app
npm install
npm run build

pm2 start  --name "portfolio"

pm2 save
pm2 startup systemd --auto

echo "Next.js app deployment completed successfully!"