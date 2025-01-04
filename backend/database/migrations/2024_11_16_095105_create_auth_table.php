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
        Schema::create('auth', function (Blueprint $table) {
               $table->id();
    $table->string('username')->unique();
    $table->string('password');
    $table->enum('rank', ['MANAGER', 'CHEF', 'STAFF'])->default('STAFF');
    $table->string('address');
    $table->string('image');
    $table->string('phone');
    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auth');
    }
};
