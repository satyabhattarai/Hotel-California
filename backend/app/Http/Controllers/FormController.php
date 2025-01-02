<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use App\Models\Client;
use App\Models\Auth;
use App\Models\CleanAlert;
use App\Models\Order;
use App\Models\History;
use Illuminate\Support\Facades\Storage;


class FormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
        ]);

        $form = Form::create($validated);

        return response()->json(['message' => 'User created successfully'], 201);
    }

    // for signup
    public function signup(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|max:255',
        ]);

        $form = Auth::create($validated);

        return response()->json(['message' => 'User created successfully'], 201);
    }



    // for new client register
    public function client_register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'number' => 'required|numeric',
            'visits' => 'required|integer',
        ]);

        $form = Client::create($validated);

        return response()->json(['message' => 'User created successfully'], 201);
    }





    public function create_clean_alert(Request $request)
    {
        $validated = $request->validate([

            'tablenumber' => 'required|numeric',
            'status' => 'required|boolean',
            'alert_message' => 'required|string',
        ]);

        $form = CleanAlert::create($validated);

        return response()->json(['message' => 'CleanAlert created successfully'], 201);
    }

    public function order_item(Request $request)
    {

        $orders = $request->input('orders');

        foreach ($orders as $orderData) {
            Order::create([
                'user_number' => $orderData['user_number'],
                'name' => $orderData['name'],
                'quantity' => $orderData['quantity'],
                'price' => $orderData['price'],
                'table_number' => $orderData['table_number'],
                'desc' => $orderData['desc'],
                'waiting_time' => $orderData['waiting_time'] ?? null,
                'status' => $orderData['status'] ?? 'PENDING',
            ]);
        }
        return response()->json(['message' => 'Orders stored successfully!']);
    }





    //upload history of client
    public function client_history_upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:pdf|max:2048',
            'user_name' => 'required|string',
            'table_number' => 'required|string',
            'user_number' => 'required|string',
            'payment_date' => 'required|date',
            'total_amount' => 'required|numeric',
        ]);

        if ($request->file('file')->isValid()) {
            $filePath = $request->file('file')->store('history', 'public');

            // Save to the database
            $history = new History();
            $history->user_name = $request->user_name;
            $history->table_number = $request->table_number;
            $history->user_number = $request->user_number;
            $history->payment_date = $request->payment_date;
            $history->total_amount = $request->total_amount;
            $history->file_path = $filePath;
            $history->save();

            return response()->json([
                'message' => 'Payment record saved successfully.',
                'file_path' => $filePath,
            ], 201);
        }

        return response()->json(['message' => 'File upload failed.'], 500);
    }



    public function download_client_history($id)
    {
        $history = History::findOrFail($id);


        $filePath = storage_path('app/public/' . $history->file_path);

        if (file_exists($filePath)) {
            return response()->download($filePath);
        }

        return response()->json(['message' => 'File not found.'], 404);
    }
}
