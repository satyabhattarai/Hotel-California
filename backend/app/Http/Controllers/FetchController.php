<?php

namespace App\Http\Controllers;

use App\Models\Fetch;
use App\Models\Attendance;
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

       $results = Menu::all()->map(function ($menu) {
        return [
            'id' => $menu->id,
            'name' => $menu->name,
            'image' => $menu->image ? asset('storage/' . $menu->image) : null, // Generate full image URL
            'category' => $menu->category,
            'alt' => $menu->alt,
            'waiting_time' => $menu->waiting_time,
            'desc' => $menu->desc,
            'price' => $menu->price,
            'ingredients' => $menu->ingredients,
            'created_at' => $menu->created_at,
            'updated_at' => $menu->updated_at,
        ];
    });

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


    //fetch orders for chef
     public function fetch_chef_order(Request $request)
    {
        $status = $request->input('status');

        if ($status )  {
            $orders = Order::where('status', $status)->get();
            return response()->json($orders);
        } else {
            $orders = Order::all();
            return response()->json($orders);
        }
        return response()->json(['message' => 'error'], 400);
    }







     public function manager_fetch_history(Request $request)
    {
        $query = $request->query('query');
        $historyDetails = History::where('user_number', 'LIKE', "%" . $query . "%")->orWhere('user_name', 'LIKE', "%" . $query . "%")->orWhere('table_number',$query)->orWhere('payment_date',  'LIKE', "%" . $query . "%")->get();

        return response()->json(['historyDetails' => $historyDetails]);
    }

    public function getAllAttendance()
    {
        $attendance = Attendance::orderBy('date', 'desc')->get(); // Sorting by date in descending order
        return response()->json(['attendance' => $attendance]);
    }



    public function employee_fetch()
{
    $users = Auth::orderByRaw("FIELD(rank, 'MANAGER', 'CHEF', 'STAFF')")->get();

    // Modify each user object to include full image path
    $users->transform(function ($user) {
        $user->image = $user->image ? asset("storage/" . $user->image) : null;
        return $user;
    });

    return response()->json($users);
}
}
