<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Admin/Dashboard/Index');
    }
    public function store(Request $request)
    {

        return;
    }
    public function sow(Request $request)
    {

        return;
    }
    public function update(Request $request)
    {

        return;
    }
    public function delete(Request $request)
    {

        return;
    }
}
