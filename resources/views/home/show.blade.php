@include('home.search')

@section('title', $title)
@section('content')
	@yield('search')
@endsection

@extends('layouts/app')