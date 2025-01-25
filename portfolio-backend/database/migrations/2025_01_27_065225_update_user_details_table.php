<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_details', function (Blueprint $table) {
            $table->date('birthday')->nullable()->after('nickname');
            $table->dropColumn('age');

            $table->string('status')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_details', function (Blueprint $table) {
            $table->dropColumn('birthday');
            $table->integer('age')->after('nickname');

            $table->enum('status', ['active', 'inactive'])->change();
        });
    }
};
