window.onload = function(){

    //Set values
    let search_Form_Block = document.getElementsByClassName('search-form')[0];
    let search_Form = search_Form_Block.getElementsByTagName('form')[0];
    let search_Form_Inputs = search_Form.getElementsByTagName('input');
    let search_Input = document.getElementById('search-input');
	
	//Search
    search_Input.oninput = function() {
        searchFilms(search_Form);
    };

    function searchFilms(data) {
        //Prepare request
        let xhr = new XMLHttpRequest();
        xhr.open('post', 'film/search');
        xhr.responseType = 'json';
        data = new FormData(data);

        xhr.onload = function(){
            if(this.status != 200){
                return false;
            }
            //Get json response
            let response = this.response;
            //Check if response is empty
            if(response.length == 0){
                return false;
            }
            changeResultArea(response);
        };
        //Send request
        xhr.send(data);
    }

    function changeResultArea(data) {
    	let resultArea = document.getElementsByClassName('result-block')[0];
        resultArea.innerHTML = "";

        for(let i = 0; i < data.length; i++){
            let resultBlock = document.createElement('a');
            resultBlock.href = data[i].href;

            let result = document.createElement('div');
            result.className = "result";

            let title = document.createElement('span');
            title.innerHTML = data[i].title;
            title.className = "title";

            let more = document.createElement('span');
            more.innerHTML = data[i].more;
            more.className = "more";

            result.appendChild(title);
            result.appendChild(more);
            resultBlock.appendChild(result);
            resultArea.appendChild(resultBlock);
        }
    }
};