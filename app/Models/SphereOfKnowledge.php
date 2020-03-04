<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $created_at
 * @property string $updated_at
 * @property Diary[] $diaries
 * @property Material[] $materials
 */
class SphereOfKnowledge extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'spheres_of_knowledge';

    /**
     * @var array
     */
    protected $fillable = ['name', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function diaries()
    {
        return $this->hasMany('AppModels\Diary', 'sphere_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function materials()
    {
        return $this->hasMany('AppModels\Material', 'sphere_id');
    }
}
