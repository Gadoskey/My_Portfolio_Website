# Create Nginx configuration for my Next.js app added the current server at hand
# Might need another script to regenerate certbot ssl and add it to this location


NGINX_CONFIG="/etc/nginx/sites-available/portfolio"
echo "server {
    listen 80;
    server_name 20.168.8.156;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}" | sudo tee \$NGINX_CONFIG

sudo nginx -t

sudo ln -s \$NGINX_CONFIG /etc/nginx/sites-enabled/

sudo systemctl restart nginx

echo "Nginx configuration completed successfully!"