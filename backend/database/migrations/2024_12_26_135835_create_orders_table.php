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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('user_number');
            $table->string('name');
            $table->integer('quantity');
            $table->integer('table_number');
            $table->string('price');
            $table->text('desc');
            $table->integer('waiting_time')->nullable();
            $table->enum('status', ['DELIVERED', 'PROGRESSING', 'PREPARED', 'PENDING'])->default('PENDING');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
