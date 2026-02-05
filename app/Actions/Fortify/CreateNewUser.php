<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        $input['domain'] = $input['subdomain'].'.'.config('tenancy.identification.central_domains')[0];

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'workspace_name' => ['required', 'string', 'max:255'],
            'subdomain' => ['required', 'string', 'max:63', 'alpha_dash'],
            'domain' => ['required', 'string', 'max:255', 'unique:domains,domain'],
            'terms' => ['required', 'accepted'],
        ])->validate();

        return DB::transaction(function () use ($input) {
            $tenant = Tenant::create([
                'id' => \Illuminate\Support\Str::uuid(),
                'data' => [
                    'name' => $input['workspace_name'],
                    'plan' => 'Pro Plan',
                ],
            ]);

            $tenant->domains()->create([
                'domain' => $input['domain'],
            ]);

            return User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
                'tenant_id' => $tenant->id,
            ]);
        });
    }
}
