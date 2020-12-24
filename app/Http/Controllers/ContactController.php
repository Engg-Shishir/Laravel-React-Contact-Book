<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{    
    # Store Contact
    public function store(Request $request)
    {        
      
      #<-------===== Custom Validation Message ======------>
      $request->validate([
          'fullname' => 'required|max:255',
          'email' => 'required|max:255',
          'phone' => 'required|max:255',
      ],[
          'fullname.required' => 'Enter fullname',
          'email.required' => 'Enter email',
          'phone.required' => 'Enter phone no',
      ]);
      
        $new = Contact::create([
          'fullname' => $request->fullname,
          'email' => $request->email,
          'phone' => $request->phone,
        ]);

        if($new)
        {
          return response()->json(['status'=>200,'success'=>'Contact Added Successfully']);
        }
    }   
    
    # Show Contact
    public function index()
    {
      $contacts = Contact::all();
      return response()->json(['status'=>200, 'contacts'=>$contacts]);
    }    
    
    # Edit Contact
    public function edit($id)
    {
      $contact = Contact::find($id);
      return response()->json(['status'=>200, 'contact'=>$contact]);
    }

    # Update Contact
    public function update(Request $request)
    {
      $new = Contact::where('id', $request->id)->update([
        'fullname' => $request->fullname,
        'email' => $request->email,
        'phone' => $request->phone,
      ]);

      if($new)
      {
        return response()->json(['status'=>200,'success'=>'Contact Updated Successfully']);
      }
    }


    # Delete Contact
    public function delete($id)
    {
      $done = Contact::find($id)->delete();     
      
      if($done)
      {
          return response()->json(['status'=>200,'error'=>'Contact Delete Successfully']);
      }
    }
}
