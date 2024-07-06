let counter = 0;
      let min = document.getElementById("min");
      let max = document.getElementById("max");
      let highLow = document.getElementById('high-low')
      const hThree = document.getElementById('hThree')
      let yourInputs = [];
      let yourGuesses = document.getElementById('yourGuesses')
      const submitBtn = document.getElementById('submit')
      const restart = document.getElementById('restart')
      const inputBox = document.getElementById('inputBox')
      const form = document.getElementById('guessForm')
      let randomMinNumber = Math.floor(Math.random() * 49 + 1);
      let randomMaxNumber = Math.floor(Math.random() * 50 + 1);
      let actualRandomNumber = Math.floor(Math.random() * 50 + 1);

      while(randomMinNumber === randomMaxNumber || randomMinNumber > randomMaxNumber){
        randomMaxNumber = Math.floor(Math.random() * 10 + 1);
      }

      while((actualRandomNumber === randomMinNumber) || (actualRandomNumber === randomMaxNumber) || actualRandomNumber < randomMinNumber || actualRandomNumber > randomMaxNumber){
        actualRandomNumber = Math.floor(Math.random() * 50 + 1);
      }

      min.innerText = randomMinNumber;
      max.innerText = randomMaxNumber;

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        yourInputs.push(parseInt(inputBox.value));
        yourGuesses.innerText = yourInputs.join(', ')

        if(parseInt(inputBox.value) === actualRandomNumber){
          hThree.textContent = 'Congratultions! You got it.'
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
        console.log(Date.now())
      })

      // inputBox.addEventListener('input', () => {
        
      // })