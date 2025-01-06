<?php

namespace App\Http\Controllers;

use App\Models\Fetch;
use App\Models\Alert;
use App\Models\Attendance;
use App\Models\Auth;
use App\Models\Client;
use App\Models\Reservation;
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
        $phone = $request->input('phone');
        $password = $request->input('password');


        if ($phone && $password) {
            $results = Auth::where('phone', $phone)
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
        if($query){
 $historyDetails = History::where('user_number', 'LIKE', "%" . $query . "%")->orWhere('user_name', 'LIKE', "%" . $query . "%")->orWhere('table_number',$query)->orWhere('payment_date',  'LIKE', "%" . $query . "%")->get();
        }else{
            $historyDetails = History::get();
        }


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

public function manager_reservations_fetch()
    {
        return response()->json(Reservation::all());
    }

 public function manager_alerts_fetch()
    {
        return response()->json(Alert::all());
    }
    public function waiter_alerts_fetch()
    {

        return response()->json(Alert::where('rank','CLIENT')->get());
    }


public function checkReservation(Request $request)
{
    $date = $request->input('date');
    $start_time = date("H:i:s", strtotime($request->input('start_time')));
    $end_time = date("H:i:s", strtotime($request->input('end_time')));
    $table_number = $request->input('table_number'); //

    $existingReservations = Reservation::where('date', $date)
        ->where('table_number', $table_number) // Ensure same table
        ->where(function ($query) use ($start_time, $end_time) {
            $query->where('start_time', '<', $end_time)  // Overlapping start time
                  ->where('end_time', '>', $start_time); // Overlapping end time
        })
        ->get(['table_number', 'date', 'start_time', 'end_time']);

    if ($existingReservations->isEmpty()) {
        return response()->json(['available' => true]);
    } else {
        return response()->json([
            'available' => false,
            'reservations' => $existingReservations
        ]);
    }
}








}
