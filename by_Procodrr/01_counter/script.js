let counter = 0;
      let h1 = document.getElementById("h1");
      let incrementBy=1;
      const add = document.getElementById("increase");
      const minus = document.getElementById("decrease");
      const resetBtn = document.getElementById("reset");
        const inputBox = document.getElementById('inputBox')

      add.addEventListener("click", () => {
        minus.disabled = false;
        counter = counter + incrementBy;
        h1.textContent = counter;
      });

      minus.addEventListener("click", () => {
        counter = counter - incrementBy;
        if (counter > 0) {
          h1.textContent = counter;
        } else {
          minus.disabled = true;
        }
      });

      resetBtn.addEventListener("click", () => {
        counter = 0;
        h1.textContent = 0;
        incrementBy = 1;
        inputBox.value = 1;

      });

      inputBox.addEventListener('input', () => {
        incrementBy = parseInt(inputBox.value);
      })