<?php

namespace App\Http\Controllers;
use App\Models\Fetch;
use App\Models\Auth;
use Illuminate\Http\Request;

class FetchController extends Controller
{
   public function index(Request $request)
    {
        $filterKey = $request->input('key');   // Retrieve the filter key
        $filterValue = $request->input('value'); // Retrieve the filter value

        // Ensure the key and value exist before querying
        if ($filterKey && $filterValue) {
            $results = Fetch::where($filterKey, $filterValue)->get();
            return response()->json($results);
        }

        return response()->json($results);
    }



// for login auth
   public function login(Request $request)
{
    $username = $request->input('username');
    $password = $request->input('password');


    if ($username && $password) {

        $results = Auth::where('username', $username)
        ->where('password', $password)
                        ->get();
        return response()->json($results);
    }

    return response()->json(['message' => 'Invalid username or password'], 400);
}

}



// for signup
