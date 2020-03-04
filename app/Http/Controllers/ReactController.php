<?php

namespace App\Http\Controllers;

use App\Models\Child;

use Illuminate\Http\Request;


class ReactController extends Controller
{
    public function index()
    {
        return view('react');
    }

    public function addChild(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $child = new Child();
        $child->name = $request->name;
        $child->save();
        if ($child) {
            return 'Детето беше добавено успешно';
        } else {
            return 'Грешка!';
        }
    }
}
