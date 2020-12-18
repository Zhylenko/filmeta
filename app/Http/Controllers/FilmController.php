<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Libraries\Parser;
use App\Libraries\phpQuery;

class FilmController extends Controller
{
	public function Show()
    {
    	$title = 'Filmeta';
    	return view('home.show', ['title' => $title]);
    }

    public function Search(Request $request)
    {
    	$value = $request->search;

    	$data = $this->searchFilms($value);
    	return response($data)->header('Content-Type', 'application/json');
    }

    private function searchFilms($value){
    	$parser = new Parser('https://hdrezka-ag.com/engine/ajax/search.php');
    	$parser->setFields(['q' => $value]);
    	$result = $parser->getPage();

    	$data = [];

    	$pq = phpQuery::newDocument($result);
    	$elements = $pq->find('.b-search__section_list li');
    	foreach ($elements as $key => $element) {
    		$element = pq($element);

    		$href = $element->find('a')->attr('href');
    		$title = $element->find('.enty')->text();
    		$more = $element->text();

    		$data[] = ['href' => $href, 'title' => $title, 'more' => $more];
    	}
    	return $data;
    }
}
