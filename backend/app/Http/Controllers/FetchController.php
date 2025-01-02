<?php

namespace App\Http\Controllers;

use App\Models\Fetch;
use App\Models\Auth;
use App\Models\Client;
use App\Models\Menu;
use App\Models\Order;
use App\Models\History;

use Illuminate\Http\Request;

class FetchController extends Controller
{
    public function index()
    {

        $results = Fetch::get();
        return response()->json($results);
    }
    public function fetch_menu()
    {

        $results = Menu::get();
        return response()->json($results);
    }



    // for login auth
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');


        if ($username && $password) {
            $results = Auth::where('username', $username)
                ->where('password', $password)->get();
            return response()->json($results);
        }
        return response()->json(['message' => 'Invalid username or password'], 400);
    }

    // for checking client number already exists or not

    public function client_check_number(Request $request)
    {
        $number = $request->input('number');

        // Find the client by their number
        $client = Client::where('number', $number)->first(); // Use first() instead of get() to get a single record

        // Check if the client exists
        if ($client) {
            $client->visits = $client->visits + 1;
            $client->save();
            return response()->json([
                'message' => 'Client found',
                'name' => $client->name,
                'number' => $client->number,

            ]);
        } else {
            return response()->json([
                'message' => 'Client not found',
            ]);
        }
    }




    //for fetching order for client
    public function fetch_order(Request $request)
    {
        $user_number = $request->input('number');

        if ($user_number) {
            $orders = Order::where('user_number', $user_number)->get();
            return response()->json($orders);
        } else {
            return response()->json(['message' => $user_number]);
        }
        return response()->json(['message' => 'Invalid username or password'], 400);
    }

    public function fetch_client_visits(Request $request)
    {
        $user_number = $request->input('number');

        if ($user_number) {
            $visits = Client::where('number', $user_number)->get();
            return response()->json($visits);
        } else {
            return response()->json($user_number);
        }
        return response()->json(['message' => 'Invalid username or password'], 400);
    }

    public function fetch_client_history(Request $request)
    {
        $number = $request->query('number');
        $historyDetails = History::where('user_number', $number)->get();

        return response()->json(['historyDetails' => $historyDetails]);
    }
}
