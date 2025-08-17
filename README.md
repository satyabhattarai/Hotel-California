
🏨 Hotel California

## Installation

backend setup (laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate

```
configure database in .env and run migrations   
```bash
php artisan migrate 
```
Run laravel
```bash
php artisan serve
```
frontend setup (react)

```bash
cd client
npm install
```
Start react development server
```bash
npm run dev
```
Done! You now have Hotel California running locally.
