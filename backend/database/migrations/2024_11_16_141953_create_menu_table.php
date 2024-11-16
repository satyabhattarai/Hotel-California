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
            $table->id()->unique();
            $table->timestamps();
            $table->string('name');
            $table->string('desc');
            $table->string('alt');
            $table->enum('category',[ 'breakfast', 'brunch']);
             $table->string('image_path');
             $table->float('price');




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
