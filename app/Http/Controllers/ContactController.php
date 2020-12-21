<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{    
    public function store(Request $request)
    {
        $new = Contact::create([
          'fullname' => $request->fullname,
          'email' => $request->email,
          'phone' => $request->phone,
        ]);

        if($new)
        {
            return response()->json('hello react response');
        }
    }
}
