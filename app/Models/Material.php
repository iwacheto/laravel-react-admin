<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $sphere_id
 * @property string $name
 * @property string $created_at
 * @property string $updated_at
 * @property SpheresOfKnowledge $spheresOfKnowledge
 * @property Diary[] $diaries
 */
class Material extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['sphere_id', 'name', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function spheresOfKnowledge()
    {
        return $this->belongsTo('AppModels\SpheresOfKnowledge', 'sphere_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function diaries()
    {
        return $this->hasMany('AppModels\Diary');
    }
}
