🏨 Hotel California

Full-stack hotel management & booking application built with ReactJS (frontend) and Laravel (backend).

Installation
clone the repository and cd into it
git clone https://github.com/your-username/hotel-california.git
cd hotel-california

backend setup (laravel)
cd backend
composer install
cp .env.example .env
php artisan key:generate

configure database in .env and run migrations
php artisan migrate

run laravel server
php artisan serve

frontend setup (react)
cd ../client
npm install

start react development server
npm run dev

Running the app

Laravel backend → http://127.0.0.1:8000

React frontend → http://localhost:3000

⚡ Done! You now have Hotel California running locally.
