document.querySelector('.single-selector__radiowrap').click();
document.querySelector('button[class="survey-button question__btn"]').click();

setTimeout(function() {
    document.querySelector('.single-selector__radiowrap').click();
    document.querySelector('button[class="survey-button question__btn"]').click();

    setTimeout(function() {
        document.querySelector('.single-selector__radiowrap').click();
        document.querySelector('button[class="survey-button question__btn"]').click();

        setTimeout(function() {
            document.querySelector('.multi-selector__checkbox').click();
            document.querySelector('button[class="survey-button question__btn"]').click();

            setTimeout(function() {
                document.querySelector('.multi-selector__checkbox').click();
                document.querySelector('button[class="survey-button question__btn"]').click();

                setTimeout(function() {
                    document.querySelector('.dropdown-select__item').click();
                    document.querySelector('button[class="survey-button question__btn"]').click();

                    setTimeout(function() {
                        document.querySelector('.multi-selector__checkbox').click();
                        document.querySelector('button[class="survey-button question__btn"]').click();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

