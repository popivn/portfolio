#!/bin/bash
# Start PHP-FPM
php-fpm -D

# Start Nginx and keep it in the foreground
nginx -g 'daemon off;'

