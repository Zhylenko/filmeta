@section('head')
	<title>@yield('title')</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="{{ URL::asset('favicon.ico') }}" type="image/x-icon">

	<!-- Main Styles -->
	<link rel="stylesheet" href="{{ URL::asset('css/style.css') }}">
	<!-- Player -->
	<link rel="stylesheet" href="{{ URL::asset('css/player.css') }}">
@endsection