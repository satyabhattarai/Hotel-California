<?php

namespace App\Http\Controllers;
use App\Models\Fetch;
use App\Models\Auth;
use App\Models\Client;
use App\Models\Menu;

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
        ]);
    } else {
        return response()->json([
            'message' => 'Client not found',
        ]);
    }
}




}
