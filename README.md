
🏨 Hotel California

## Project- Objectives

    Develop a waiterless smart dining system to modernize restaurant operations and enhance customer convenience in Nepal.

    Enable staff, chefs, and managers to streamline operations and move beyond manual processes using modern technology.

    Implement real-time kitchen tracking to monitor chef order timings and ensure timely service for guests.

    Provide secure online ordering and reservations, making the booking and payment process faster, safer, and more efficient.



    
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
