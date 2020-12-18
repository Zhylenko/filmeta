@section('title', $title)
@section('content')
	<!-- Film Area -->
	<div class="film-area">
		<div class="film-block">
			<div class="film-video">
				<div class="video-player" id="video">
					<video src="{{ $video }}" preload=""></video>
					<div class="player-controls">
						<div class="player-bg-control">
							<div class="player-play-btn play"></div>
						</div>
						<div class="control-bar">
							<div class="player-play-btn play"></div>
							<div class="player-time-block">
								<p>00:00:00 / 00:00:00</p>
							</div>
							<div class="player-progress-bar">
								<input type="range" class="player-progress" value="0" max="">
							</div>
							<div class="player-fullscreen-btn">
								<img src="https://www.iconsdb.com/icons/preview/white/fullscreen-12-xxl.png"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="film-title">
				<h2>Lorem, ipsum.</h2>
			</div>
			<a href="#video">
				<div class="film-image">
					<img src="{{ $poster }}" alt="">
				</div>
			</a>
			<div class="film-data">
				<table>
					@foreach($filmData as $row => $columns)
					<tr>
						@foreach($columns as $value)
						<td>{{ $value }}</td>	
						@endforeach	
					</tr>
					@endforeach	
				</table>
			</div>
			<div class="film-text">
				{{ $description }}
			</div>
		</div>
	</div>
@endsection

@extends('layouts/app')