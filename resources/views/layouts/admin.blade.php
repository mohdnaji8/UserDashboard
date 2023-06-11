<!DOCTYPE html>
<!--
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.6
Version: 4.5.6
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
Renew Support: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]>
<html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]>
<html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" dir="rtl">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>لوحة تحكم المستحدمين</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/bootstrap/css/bootstrap-rtl.min.css" rel="stylesheet"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/bootstrap-switch/css/bootstrap-switch-rtl.min.css"
          rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- Font awsom STYLES -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <link href="{{ asset('') }}assets/global/plugins/datatables/datatables.min.css" rel="stylesheet"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap-rtl.css"
          rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet"
          type="text/css" />
    <!-- date picker-->
    <link href="{{ asset('') }}assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css"
          rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"
          rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css"
          rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"
          rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/clockface/css/clockface.css" rel="stylesheet"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/fullcalendar/fullcalendar.min.css" rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/global/fullcalendar/base.css" rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/global/fullcalendar/css.css" rel="stylesheet" type="text/css" />
    <!-- form wizared -->
    <link href="{{ asset('') }}assets/global/plugins/select2/css/select2.min.css" rel="stylesheet"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet"
          type="text/css" />

    <link href="{{ asset('') }}assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.css" rel="stylesheet"
          type="text/css" />


    <!--  file upload -->

    <link href="{{ asset('') }}assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet"
          type="text/css" />
    <!-- END PAGE LEVEL PLUGINS -->


    <!-- BEGIN THEME GLOBAL STYLES -->
    <link href="{{ asset('') }}assets/global/css/components-rtl.css" rel="stylesheet" id="style_components"
          type="text/css" />
    <link href="{{ asset('') }}assets/global/css/plugins-rtl.min.css" rel="stylesheet" type="text/css" />
    <!-- END THEME GLOBAL STYLES -->


    <!-- BEGIN THEME LAYOUT STYLES -->
    <link href="{{ asset('') }}assets/layouts/layout/css/layout-rtl.min.css" rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/layouts/layout/css/themes/default-rtl.css" rel="stylesheet" type="text/css"
          id="style_color" />
    <link href="{{ asset('') }}assets/layouts/layout/css/custom-rtl.min.css" rel="stylesheet" type="text/css" />

    <link href="{{ asset('') }}assets/my/myFont.css" rel='stylesheet' type='text/css'>
    <link href="{{ asset('') }}assets/my/panel_.css" rel="stylesheet" type="text/css" />
    <!-- sweet alert -->
    <link href="{{ asset('') }}assets/pages/sweetalert/sweetalert.css" rel="stylesheet" type="text/css" />

    <!-- END THEME LAYOUT STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />
    <!-- add  css toastr -->
    <link href="{{ asset('') }}assets/pages/css/toastr.css" rel="stylesheet" type="text/css" />
    <link href="{{ asset('') }}assets/pages/css/mystyle.css" rel="stylesheet" type="text/css" />
    <!-- end  css toastr -->
</head>
<!-- END HEAD -->
@livewireStyles

<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white">
<!-- BEGIN HEADER -->
<div class="page-header navbar navbar-fixed-top">
    <!-- BEGIN HEADER INNER -->
    <div class="page-header-inner ">
        <!-- BEGIN LOGO -->
        <!-- END LOGO -->
        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse"
           data-target=".navbar-collapse">
            <span></span>
        </a>

        <!-- END RESPONSIVE MENU TOGGLER -->
        <!-- BEGIN TOP NAVIGATION MENU -->
        <div class="top-menu">
            <ul class="nav navbar-nav pull-right">
                @if (Auth::user())
                    <li class="dropdown dropdown-user">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"
                           data-hover="dropdown" data-close-others="true">

                            <i class="icon-user"></i>
                            <span class="username username-hide-on-mobile">

                                    {{ Auth::user()->name }}

                                </span>
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-default">
                            <li class="divider">
                            </li>

                            <li>
                                <div style="margin-right: 10%">
                                    <form method="POST" action="{{ route('logout') }}">
                                        @csrf
                                        <x-dropdown-link :href="route('logout')"
                                                         onclick="event.preventDefault();
                                                this.closest('form').submit();">
                                            {{ __('Log Out') }}
                                        </x-dropdown-link>
                                    </form>
                                </div>

                            </li>
                        </ul>
                    </li>
                @else
                    <div style="margin-top: 10%">
                        <a href="{{ route('login') }}" class="btn green">Login</a>
                    </div>
                @endif
                <!-- END USER LOGIN DROPDOWN -->
                <!-- BEGIN QUICK SIDEBAR TOGGLER -->

            </ul>
        </div>
        <!-- END TOP NAVIGATION MENU -->
    </div>
    <!-- END HEADER INNER -->
</div>
<!-- END HEADER -->
<!-- BEGIN HEADER & CONTENT DIVIDER -->
<div class="clearfix"></div>
<!-- END HEADER & CONTENT DIVIDER -->
<!-- BEGIN CONTAINER -->
<div class="page-container">
    <!-- BEGIN SIDEBAR -->

    <div class="page-sidebar-wrapper">
        <!-- BEGIN SIDEBAR -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <div class="page-sidebar navbar-collapse collapse">
            <!-- BEGIN SIDEBAR MENU -->
            <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
            <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
            <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
            <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
            <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
            <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
            <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true"
                data-slide-speed="200" style="padding-top: 30px">
                <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
                <li class="sidebar-toggler-wrapper hide">
                    <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                    <div class="sidebar-toggler">
                        <span></span>
                    </div>
                    <!-- END SIDEBAR TOGGLER BUTTON -->
                </li>
                <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
                <li class="sidebar-search-wrapper">
                    <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
                    <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
                    <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
                    <form class="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html"
                          method="POST">
                        <a href="javascript:;" class="remove">
                            <i class="icon-close"></i>
                        </a>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search...">
                            <span class="input-group-btn">
                                    <a href="javascript:;" class="btn submit">
                                        <i class="icon-magnifier"></i>
                                    </a>
                                </span>
                        </div>
                    </form>
                    <!-- END RESPONSIVE QUICK SEARCH FORM -->
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-home"></i>
                        الرئيسية
                    </a>
                </li>
                <li class="nav-item start  selected">
                    <a href="" class="nav-link nav-toggle">
                        <i class=""></i>
                        <span class="title">المستخدمون</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub-menu ">
                        <li>
                            <a href="{{route('dashboard')}}">
                                <i class="fa fa-home"></i>
                                المستخدمون
                            </a>
                        </li>
                        <li>
                            <a href="{{route('admin.users.create')}}">
                                <i class="fa fa-plus"></i>
                                مستخدم جديد
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>




            <!-- END SIDEBAR MENU -->
            <!-- END SIDEBAR MENU -->
        </div>
        <!-- END SIDEBAR -->
    </div>
    <!-- END SIDEBAR -->
    <!-- BEGIN CONTENT -->

    <div class="page-content-wrapper">
        <div class="page-content">


            <div class="caption font-red-sunglo page-title">
                <i class=" icon-layers font-red"></i>
                <span class="caption-subject font-red bold uppercase" style="font-size: 16px">
                    </span>
            </div>
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <i class="fa fa-home"></i>
                        <a href="#">main title</a>
                        <i class="fa fa-angle-left"></i>
                    </li>
                    <li>
                        <a href="#">sub title</a>
                        <i class="fa fa-angle-left"></i>
                    </li>
                    <li>
                        <a href="#">sub of sub title</a>
                    </li>
                </ul>
                <div class="page-toolbar">
                    <div class="btn-group pull-right">

                    </div>
                </div>
            </div>
            <!-- END PAGE HEADER-->
            <!-- BEGIN PAGE CONTENT-->
            <div class="row">
                <div class="col-sm-12" style="margin-top: 20px">
                    @yield('content')
                </div>
            </div>
            <!-- END PAGE CONTENT-->
        </div>
    </div>
    <!-- END CONTENT -->
    <!-- BEGIN QUICK SIDEBAR -->
    <a href="javascript:;" class="page-quick-sidebar-toggler">
        <i class="icon-login"></i>
    </a>
    <!-- END QUICK SIDEBAR -->
</div>
<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<div class="page-footer text-center">
    <div class="page-footer-inner text-center"> <?php echo date('Y'); ?> &copy; شركة توزيع الكهرباء - محافظات غزة.

    </div>
    <div class="scroll-to-top">
        <i class="icon-arrow-up"></i>
    </div>
</div>
<!-- END FOOTER -->
<!--[if lt IE 9]> -->


<!-- BEGIN CORE PLUGINS -->
<script src="{{ asset('') }}assets/global/plugins/respond.min.js"></script>
<script src="{{ asset('') }}assets/global/plugins/excanvas.min.js"></script>
<![endif]-->

<script src="{{ asset('') }}assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/js.cookie.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"
        type="text/javascript"></script>
<!-- END CORE PLUGINS -->

<!-- BEGIN PAGE LEVEL PLUGINS -->

<script src="{{ asset('') }}assets/global/fullcalendar/moment.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/fullcalendar/fullcalendar.js" type="text/javascript"></script>

<script src="{{ asset('') }}assets/global/fullcalendar/home.js" type="text/javascript"></script>

<script src="{{ asset('') }}assets/global/scripts/datatable.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/datatables/datatables.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/jquery-bootpag/jquery.bootpag.min.js" type="text/javascript">
</script>
<script src="{{ asset('') }}assets/global/plugins/holder.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-confirmation/bootstrap-confirmation.min.js"
        type="text/javascript"></script>

<!--  Date picker  -->


<script src="{{ asset('') }}assets/global/plugins/moment.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/clockface/js/clockface.js" type="text/javascript"></script>


<!--   form wizared -->


<script src="{{ asset('') }}assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/jquery-validation/js/jquery.validate.js" type="text/javascript">
</script>
<script src="{{ asset('') }}assets/global/plugins/jquery-validation/js/additional-methods.min.js"
        type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js"
        type="text/javascript"></script>

<script src="{{ asset('') }}assets/global/plugins/fuelux/js/spinner.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js"
        type="text/javascript"></script>


<!--  file  -->

<script src="{{ asset('') }}assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"
        type="text/javascript"></script><!-- END PAGE LEVEL PLUGINS -->


<!-- BEGIN THEME GLOBAL SCRIPTS -->
<script src="{{ asset('') }}assets/global/scripts/app.min.js" type="text/javascript"></script>

<!-- END THEME GLOBAL SCRIPTS -->


<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="{{ asset('') }}assets/pages/scripts/components-bootstrap-touchspin.js" type="text/javascript">
</script>
<script src="{{ asset('') }}assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript">
</script>
<script src="{{ asset('') }}assets/pages/scripts/components-select2.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/pages/scripts/form-wizard.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/my_JS/multi_sel.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/pages/scripts/table-datatables-editable.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/pages/scripts/ui-general.min.js" type="text/javascript"></script>
<!--       file upload      -->


<script src="{{ asset('') }}assets/pages/scripts/form-validation.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/global/plugins/bootstrap-table/bootstrap-table.min.js" type="text/javascript">
</script>
<script src="{{ asset('') }}assets/pages/scripts/table-bootstrap.min.js" type="text/javascript"></script>


<!-- END PAGE LEVEL SCRIPTS -->


<!-- BEGIN THEME LAYOUT SCRIPTS -->
<script src="{{ asset('') }}assets/layouts/layout/scripts/layout.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/layouts/layout/scripts/demo.min.js" type="text/javascript"></script>
<script src="{{ asset('') }}assets/layouts/global/scripts/quick-sidebar.min.js" type="text/javascript"></script>
<!-- END THEME LAYOUT SCRIPTS -->
<!-- add js toastr -->
<script src="{{ asset('') }}assets/pages/scripts/toastr.js" type="text/javascript"></script>
<!--sweet alert -->
<script src="{{ asset('') }}assets/pages/sweetalert/sweetalert.min.js" type="text/javascript"></script>

<!-- pulsate add -->
<script src="{{ asset('') }}assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>

<!-- end toastr -->
<script type="text/javascript">
    $(function() {
        $('.multiselect-ui').multiselect({
            includeSelectAllOption: true
        });
    });
</script>

<script>
    jQuery(document).ready(function() {


        Metronic.init(); // init metronic core components
        Layout.init(); // init current layout
        QuickSidebar.init(); // init quick sidebar
        Demo.init(); // init demo features
    });
    // block when ajax activity starts
    $(document).ajaxStart(function() {
        $.blockUI({
            message: '<h3>انتظر قليلا!</h3>  <div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff',
                'z-index': '10100'
            }
        })


    });



    // unblock when ajax activity stops
    $(document).ajaxStop($.unblockUI);
</script>

@livewireScripts
<!-- END JAVASCRIPTS -->
</body>

</html>
