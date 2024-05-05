'use strict'



      const productSelect = document.getElementById("product");
      const quantityInput = document.getElementById("quantity");
      const addToCartBtn = document.getElementById("addToCartBtn");
      const hammasiniHisobla = document.getElementById("hisobla");
      const totalCostSpan = document.getElementById("totalCost");
      const cartItemsElement = document.getElementById("cartItems");
      let royhat = {};
      
      
      
      
      
      addToCartBtn.addEventListener("click", ()=> {
        const product = productSelect.value;
        const quantity = Number(quantityInput.value);
        if (!isNaN(quantity) && quantity > 0) {
          if (!royhat[product]) {
            royhat[product] = 0;
          }
          royhat[product] += quantity;
          quantityInput.value = "";
          yangila();
        } else {
          alert("Iltimos togri son kiriting");
        }
      });
      
      function yangila() {
        let royhatItem = "";
        for (const product in royhat) {
          const listItemText = product + ": " + royhat[product];
          const deleteButton = document.createElement("button");
          
          royhatItem += `<li class='fs-3'>${listItemText} ta </li>`;
        }
        cartItemsElement.innerHTML = royhatItem;
      }
      
      hammasiniHisobla.addEventListener("click", ()=> {
        let totalCost = 0;
        
        for (const product in royhat) {
          switch (product) {
            case "somsa":
              totalCost += royhat[product] * 3000;
              break;
            case "pilaf":
              totalCost += royhat[product] * 15000;
              break;
              case "gumma":
                totalCost += royhat[product] * 2000;
              break;
            default:
              
              break;
          }
        }

        const serviceCharge = totalCost * 0.1;
        totalCost += serviceCharge;

        totalCostSpan.innerText = totalCost  + "  " +  'So`m';
      });



