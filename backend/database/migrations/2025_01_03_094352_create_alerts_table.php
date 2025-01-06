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
    Schema::create('alerts', function (Blueprint $table) {
    $table->id();
   $table->enum('rank', ['CHEF', 'CLIENT'])->default('CHEF');
    $table->text('message')->nullable();
    $table->text('table_number')->nullable();
    $table->enum('status', ['PENDING', 'COMPLETED'])->default('PENDING');
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alerts');
    }
};
