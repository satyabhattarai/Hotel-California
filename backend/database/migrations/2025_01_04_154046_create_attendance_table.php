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
        Schema::create('attendance', function (Blueprint $table) {
           $table->id();
            $table->string('user_name');
            $table->string('user_number');
            $table->enum('rank', ['CHEF', 'STAFF', 'Manager']);
            $table->date('date')->default(DB::raw('CURRENT_DATE'));
            $table->enum('status', ['PRESENT', 'ABSENT'])->default('ABSENT');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendance');
    }
};
