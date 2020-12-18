@include('layouts.head')
@include('layouts.header')
@include('layouts.scripts')
<!DOCTYPE html>
<html>
<head>
	@yield('head')
</head>
<body>
	@yield('header')
	@yield('content')
	@yield('scripts')
</body>
</html>