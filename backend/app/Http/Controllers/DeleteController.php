<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Menu;
use App\Models\Alert;
use App\Models\Auth;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


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


public function delete_menu(Request $request)
{
    $menuId = $request->input('id');

    $menu = Menu::find($menuId);

    if (!$menu) {
        return response()->json(['message' => 'Menu item not found'], 404);
    }


    if ($menu->image) {
        $imagePath = storage_path('app/public/' . $menu->image);
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
    }


    $menu->delete();

    return response()->json(['message' => 'Menu item deleted successfully'], 200);
}


public function delete_employee($id)
    {
        $employee = Auth::find($id);

        if (!$employee) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Delete image if exists
        if ($employee->image) {
            $imageName = str_replace(asset('storage/'), '', $employee->image);
            Storage::disk('public')->delete($imageName);
        }

        $employee->delete();
        return response()->json(['message' => 'Employee deleted successfully!']);
    }

public function manager_reservations_delete($id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();
        return response()->json(['message' => 'Reservation deleted successfully']);
    }

 public function manager_alerts_delete($id)
    {
        $alert = Alert::find($id);

        if (!$alert) {
            return response()->json(['message' => 'Alert not found'], 404);
        }

        $alert->delete();
        return response()->json(['message' => 'Alert deleted successfully']);
    }



}
