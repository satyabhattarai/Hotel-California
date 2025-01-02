<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function delete_order($id)
    {
        $record = Order::find($id);

        if ($record) {
            $record->delete();
            return response()->json(['message' => 'Record deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Record not found.'], 404);
        }
    }
}
