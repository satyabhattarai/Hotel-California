<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use App\Models\Client;
use App\Models\Auth;
use App\Models\Order;

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


    public function order_item(Request $request)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'price' => 'required|string|max:255',
        //     'desc' => 'required|string|max:255',
        //     'category'=> 'required|string|max:255',
        // ]);
        $orders = $request->orders;
        $time=now();

        $orders = array_map(function ($order) use ($time){
            return $order + ['created_at'=>$time, 'updated_at'=>$time];
        }, $orders);
        Order::insert($orders);

        return response()->json(['message' => 'Order created successfully'], 201);
    }

}
