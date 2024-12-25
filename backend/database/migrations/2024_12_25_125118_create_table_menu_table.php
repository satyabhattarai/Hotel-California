<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu', function (Blueprint $table) {
           $table->id();
            $table->string('name');
            $table->string('image');
            $table->enum('category', ['Breakfast','Momo', 'Pizza', 'Burger', 'Drinks', 'Desserts', 'Salads', 'Appetizers', 'Soups', 'Pasta', 'Sandwiches', 'Wraps & Rolls', 'Seafood', 'Steak & Grills','Sides', 'Vegan/Vegetarian', 'Kids Menu','Combo Meals' , 'Snacks' ]);
            $table->string('alt')->nullable();
            $table->string('desc')->nullable();
            $table->decimal('price', 8, 2);
            $table->text('ingredients')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu');
    }
};
