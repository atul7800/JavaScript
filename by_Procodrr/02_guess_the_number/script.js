      let highLow = document.getElementById('high-low')
      const hThree = document.getElementById('hThree')
      let yourInputs = [];
      let yourGuesses = document.getElementById('yourGuesses')
      const submitBtn = document.getElementById('submit')
      const restart = document.getElementById('restart')
      const inputBox = document.getElementById('inputBox')
      const form = document.getElementById('guessForm')
      let actualRandomNumber = Math.floor(Math.random() * 50 + 1);

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        restart.disabled = false;
        yourInputs.push(parseInt(inputBox.value));
        yourGuesses.innerText = yourInputs.join(', ')

        if(parseInt(inputBox.value) === actualRandomNumber){
          hThree.textContent = 'Congratultions! You got it.'
          submit.disabled = true;
          
        } else{
          
            hThree.style.display = 'block';
            if(parseInt(inputBox.value) < actualRandomNumber){
              highLow.innerText = 'low'
            }
            if(parseInt(inputBox.value) > actualRandomNumber){
              highLow.innerText = 'high'
            }
          
        }

        
      });

      restart.addEventListener('click', () => {
        yourInputs = [];
        yourGuesses.innerText = '';
        inputBox.value = '';
        actualRandomNumber = Math.floor(Math.random() * 50 + 1);
      })
