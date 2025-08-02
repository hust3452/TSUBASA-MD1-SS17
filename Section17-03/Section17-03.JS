        let click = document.querySelector(".button");
        let modal_text = document.querySelector(".modal-text");
        let x = document.querySelector(".x");
        let body = document.getElementById('body');
        function button_click(){
            modal_text.style.display = 'block';
            x.style.display = 'block';
            body.classList.add('show');
        }
        function x_click(){
            modal_text.style.display = 'none';
            x.style.display = 'none';
            body.classList.remove('show');
        }