@section('content')
    @if( Auth::user()->active ==1)
        <div class="portlet light portlet-fit bordered">
            <div class="portlet-body">
                <div class="table-toolbar">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="btn-group">
                                <!-- Button trigger modal-->
                                <a  class="btn green" href="{{route('admin.users.create')}}">
                                    <i class="fa fa-plus"></i>
                                    اضافة مستخدم جديد</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dataTables_wrapper no-footer" id="sample_editable_1_wrapper">

                    <div class="table">
                        <table aria-describedby="sample_editable_1_info" role="grid"
                               class="table table-striped table-hover table-bordered dataTable no-footer" id="sample_editable_1">
                            <thead>
                            <tr role="row">
                                <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                    style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                    id="seq" tabindex="0" class="sorting_asc">
                                    المتسلسل
                                </th>
                                <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                    style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                    tabindex="0" class="sorting_asc">
                                    الاسم
                                </th>
                                <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                    style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                    tabindex="0" class="sorting_asc">
                                    الايميل
                                </th>
                                <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                    style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                    tabindex="0" class="sorting_asc">
                                    صورة المستخدم
                                </th>
                                <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                    style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                    tabindex="0" class="sorting_asc">
                                    تاريخ الميلاد
                                </th>
                                <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                    style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                    tabindex="0" class="sorting_asc">
                                    الدولة
                                </th>
                                @if(Auth::user()->active ==1)
                                    <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                        style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                        tabindex="0" class="sorting_asc">
                                        فعال/غير فعال
                                    </th>
                                @endif
                                @if(Auth::user()->isAdmin ==1)
                                    <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                        style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                        tabindex="0" class="sorting_asc">
                                        مسؤول/غير مسؤول
                                    </th>
                                @endif

                                <th aria-label=" Username : activate to sort column descending" aria-sort="ascending"
                                    style="width: 120px;" colspan="1" rowspan="1" aria-controls="sample_editable_1"
                                    tabindex="0" class="sorting_asc">
                                    QRCode
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($users as $key => $user)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td >
                                        <a href="{{route('admin.users.editProfile', $user->id)}}" >
                                            {{ $user->name }}
                                        </a>
                                    </td>
                                    <td>{{ $user->email }}</td>
                                    <td>
                                        @if($user->profile)
                                            <img src="{{asset( 'Storage/'.$user->profile->image)}}" width="55px" height="60px">
                                        @else
                                            <small style="color: red"> البروفايل غير محدث</small>
                                        @endif

                                    </td>
                                    <td>
                                        @if($user->profile)
                                        {{ $user->profile->bdate }}
                                        @else
                                           <small style="color: red"> البروفايل غير محدث</small>
                                        @endif
                                    </td>
                                    <td>
                                        @if($user->profile)
                                            {{ $user->profile->country }}
                                        @else
                                            <small style="color: red"> البروفايل غير محدث</small>
                                        @endif
                                    </td>
                                    @if(Auth::user()->isAdmin ==1)
                                        <td>
                                            @if(Auth::user()->id !== $user->id)
                                                <form action="{{route('admin.users.active', $user->id )}}" method="POST">
                                                    @csrf
                                                    @method('PUT')
                                                    <input type="hidden" value="{{ $user->active }}" name="active">

                                                    @if($user->active ==1)
                                                        <button type="submit" class="btn btn-sm btn-success">
                                                            فعال
                                                        </button>
                                                    @else
                                                        <button type="submit" class="btn btn-sm btn-warning">
                                                            غير فعال
                                                        </button>
                                                    @endif


                                                </form>
                                            @endif
                                        </td>
                                    @endif
                                    @if(Auth::user()->isAdmin ==1)
                                        <td>
                                            @if(Auth::user()->id !== $user->id)
                                                <form action="{{route('admin.users.makeAdmin', $user->id )}}" method="POST">
                                                    @csrf
                                                    @method('PUT')
                                                    <input type="hidden" value="{{ $user->isAdmin }}" name="isAdmin">

                                                    @if($user->isAdmin ==1)
                                                        <button type="submit" class="btn btn-sm btn-success">
                                                            مسؤول
                                                        </button>
                                                    @else
                                                        <button type="submit" class="btn btn-sm btn-warning">
                                                            مستحدم
                                                        </button>
                                                    @endif


                                                </form>
                                            @endif
                                        </td>
                                    @endif
                                    <td>
                                        <a href="{{route('qrcode', $user->id )}}">QRCode </a>
                                    </td>
                                </tr>



                            @endforeach
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    @else
        <div class="portlet light portlet-fit bordered">
            <div class="portlet-body">
                <div class="table-toolbar">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="btn-group">
                                <h3>sorry, your account is inactive</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <!-- END EXAMPLE TABLE PORTLET-->
    <script src="{{ asset('') }}assets/jquery-3.0.0.js"></script>
    <script src="{{ asset('') }}assets/pages/scripts/jobs-datatable.js"></script>
@endsection
@extends('layouts.admin')
