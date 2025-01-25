FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev libzip-dev unzip git curl nginx \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql opcache \
    && apt-get clean

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

COPY nginx.conf /etc/nginx/sites-available/default

RUN composer install --optimize-autoloader --no-dev \
    && chmod -R 775 storage bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache

EXPOSE 80

CMD service nginx start && php-fpm
