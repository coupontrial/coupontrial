/* Author: Denis Petyukov <denis.petyukov@gmail.com> */

(function(){
    var filter = document.querySelector('.filter'),
        allButton = filter.querySelector('.all'),
        flipkartButton = filter.querySelector('.flipkart'),
        photographyButton = filter.querySelector('.photography'),
        textButton = filter.querySelector('.text'),
        audioButton = filter.querySelector('.audio'),
        flipkart = document.querySelectorAll('.postExcerpt.flipkart'),
        photography = document.querySelectorAll('.postExcerpt.photography'),
        text = document.querySelectorAll('.postExcerpt.text'),
        audio = document.querySelectorAll('.postExcerpt.audio');
    filter.addEventListener('click', function(e){
        e.preventDefault();
        var hideElements = function(nodeList) {
                for(i=0; i<nodeList.length; i++) {
                    nodeList[i].style.display = 'none';
                }
            },
            showElements = function(nodeList) {
                for(i=0; i<nodeList.length; i++) {
                    nodeList[i].removeAttribute('style');
                }
            },
            addSelectedClass = function(el) {
                allButton.className = allButton.className.replace(' selected', '');
                flipkartButton.className = flipkartButton.className.replace(' selected', '');
                photographyButton.className = photographyButton.className.replace(' selected', '');
                textButton.className = textButton.className.replace(' selected', '');
                audioButton.className = audioButton.className.replace(' selected', '');
                el.className += ' selected';
            };

        if(e.target === allButton) {
            showElements(flipkart);
            showElements(photography);
            showElements(text);
            showElements(audio);

            addSelectedClass(allButton);

            localStorage['sortByCategory'] = 'allButton';
        }
        else if(e.target === flipkartButton) {
            showElements(flipkart);
            hideElements(photography);
            hideElements(text);
            hideElements(audio);

            addSelectedClass(flipkartButton);

            localStorage['sortByCategory'] = 'flipkartButton';
        }
        else if(e.target === photographyButton) {
            hideElements(flipkart);
            showElements(photography);
            hideElements(text);
            hideElements(audio);

            addSelectedClass(photographyButton);

            localStorage['sortByCategory'] = 'photographyButton';
        }
        else if(e.target === textButton) {
            hideElements(flipkart);
            hideElements(photography);
            showElements(text);
            hideElements(audio);

            addSelectedClass(textButton);

            localStorage['sortByCategory'] = 'textButton';
        }
        else if(e.target === audioButton) {
            hideElements(flipkart);
            hideElements(photography);
            hideElements(text);
            showElements(audio);

            addSelectedClass(audioButton);

            localStorage['sortByCategory'] = 'audioButton';
        }
    }, false);
    
    eval(localStorage['sortByCategory']).click();
    //yaya, I know eval is evil, but what is the other way to do something like this?
}());