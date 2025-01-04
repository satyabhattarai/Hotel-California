<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class UpdateController extends Controller
{
    public function chef_order_response(Request $request, $id)
    {
        try {
            // Validate the incoming request
            $request->validate([
                'status' => 'required|in:DELIVERED,PROGRESSING,PENDING,PREPARED'
            ]);

            // Find the order by ID
            $order = Order::findOrFail($id);

            // Update the status
            $order->status = $request->input('status');
            $order->save();

            return response()->json(['message' => 'Order status updated successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred.', 'error' => $e->getMessage()], 500);
        }
    }
}
