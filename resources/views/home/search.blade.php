@section('search')
	<!-- Search Area -->
	<div class="search-area">
		<div class="search-block">
			<div class="search-form">
				<form action="">
					{{ csrf_field() }}
					<input type="text" name="search" placeholder="Search" autocomplete="off" id="search-input">
				</form>
			</div>
			<div class="result-area">
				<div class="result-block">
				</div>				
			</div>
		</div>
	</div>
@endsection