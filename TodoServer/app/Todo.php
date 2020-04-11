<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    //
    const CREATED_AT = null;
    const UPDATED_AT = null;

    protected $fillable=['id','task','isChecked','date'];
}
