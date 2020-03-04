<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $child_id
 * @property int $sphere_id
 * @property int $material_id
 * @property string $created_at
 * @property string $updated_at
 * @property Child $child
 * @property Material $material
 * @property SpheresOfKnowledge $spheresOfKnowledge
 */
class Diary extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'diary';

    /**
     * @var array
     */
    protected $fillable = ['child_id', 'sphere_id', 'material_id', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function child()
    {
        return $this->belongsTo('AppModels\Child');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function material()
    {
        return $this->belongsTo('AppModels\Material');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function spheresOfKnowledge()
    {
        return $this->belongsTo('AppModels\SpheresOfKnowledge', 'sphere_id');
    }
}
