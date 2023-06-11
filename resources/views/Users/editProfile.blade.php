@section('content')

        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div class="form-group row">
                    <label class="col-md-3 control-label">:حذف المستخدم </label>
                    <form method="POST" action="{{ route('admin.users.delete',$user->id) }}">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">حذف {{$user->name}}</button>
                    </form>
                </div>

                <form method="POST" action="{{ route('admin.users.updateProfile',$user->id) }}" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group row">
                        <label class="col-md-3 control-label"> تاريخ الميلاد: </label>
                        <div class="col-md-3">
                            <input type="date" name="bdate" @if($user->profile)value="{{$user->profile->bdate}} "@endif class="form-control" placeholder="Enter text">
                            @error('bdate')
                            <div class="error" style="color: red">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 control-label"> الدولة </label>
                        <div class="col-md-3">
                            <input type="text" name="country" @if($user->profile)value="{{$user->profile->country}}"@endif class="form-control" placeholder="Enter text">
                            @error('country')
                            <div class="error" style="color: red">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 control-label"> صورة المستخدم </label>
                        <div class="col-md-3">
                            <input type="file" name="image"  @if($user->profile)value="{{$user->profile->image}}"@endif class="form-control" placeholder="Enter text">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 control-label">  </label>
                        <div class="col-md-3">
                            <button type="submit" class="btn btn-default">حفظ</button>
                        </div>
                    </div>

                    <!-- Name -->
                </form>

            </div>
        </div>
<script src="{{ asset('') }}assets/jquery-3.0.0.js"></script>
<script src="{{ asset('') }}assets/pages/scripts/jobs-datatable.js"></script>

@endsection
@extends('layouts.admin')
