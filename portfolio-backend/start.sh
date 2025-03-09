#!/bin/bash

# Start PHP-FPM
php-fpm -D

# Start queue worker in background
php /var/www/html/artisan queue:work --sleep=3 --tries=3 &

# Start Nginx and keep it in the foreground
nginx -g 'daemon off;'
