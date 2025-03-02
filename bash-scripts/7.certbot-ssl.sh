#!/bin/bash

DOMAIN="gadoski.tech"
EMAIL="gadoski321@gmail.com"
NGINX_CONFIG="/etc/nginx/sites-available/portfolio"

sudo apt update -y && sudo apt install -y certbot python3-certbot-nginx

sudo certbot certonly --nginx --agree-tos --email $EMAIL -d $DOMAIN

sudo cp -r $NGINX_CONFIG $NGINX_CONFIG.backup

sudo tee $NGINX_CONFIG > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name $DOMAIN;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }
}
EOF

sudo ln -sf $NGINX_CONFIG /etc/nginx/sites-enabled/portfolio

# Reload Nginx to apply changes
sudo systemctl reload nginx

# Set up auto-renewal
echo "0 3 * * * certbot renew --quiet && systemctl reload nginx" | sudo tee /etc/cron.d/certbot-renew

echo "SSL has been enabled and HTTP is now redirected to HTTPS!"
