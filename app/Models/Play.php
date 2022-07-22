<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Play extends Model
{
    use HasFactory;
    protected $fillable = [
        'estado',
            'dificultad',
            'aciertos',
            'tiempo',
            'cantidad_cartas',
            'tipo_cartas',
            'tiempo_utilizado',
            'intentos',
            'user_id'
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }
}
