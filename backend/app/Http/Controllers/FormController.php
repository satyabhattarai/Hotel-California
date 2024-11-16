<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use App\Models\Auth;

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
}
