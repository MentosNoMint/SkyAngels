
function createDiv() {
    // Создание div
    let div = document.createElement("div");
    div.innerHTML = `<div class="flex max-w-[469px] w-full h-[48px] rounded-[11px] border-[2px] border-[#0059DF] items-center justify-between mt-[12px]">
      <div class=" flex flex-col  max-w-[56px] w-full items-center justify-end mb-[10px] ml-[19px] mt-[5px]">
       
          <input type="text" class="text-[#cfcccc] font-medium text-[14px] max-w-[56px]" placeholder="Имя">
          <div class="max-w-[56px] w-full h-[1px] bg-[#0059DF]"></div>
      </div>
     
   <div class=" flex flex-col  max-w-[56px] w-full items-center justify-end mb-[10px] ml-[19px] mt-[5px]">
          <input type="text" class="text-[#cfcccc] font-medium text-[14px] max-w-[63px]" placeholder="Фамилия">
          <div class="max-w-[56px] w-full h-[1px] bg-[#0059DF]"></div>
      </div>
    
      <div class=" flex flex-col  max-w-[84px] w-full items-center justify-end mb-[10px] ml-[19px] mt-[5px]">
       <input type="text" class="text-[#cfcccc] font-medium text-[14px] max-w-[84px]" placeholder="Номер док-в">
          <div class="max-w-[81px] w-full h-[1px] bg-[#0059DF]"></div>
      </div>
    
      <div class=" flex flex-col  max-w-[56px] w-full items-center justify-end mb-[10px] ml-[19px] mt-[5px]">
          <input type="text" class="text-[#cfcccc] font-medium text-[14px] max-w-[56px]" placeholder="Телефон">
          <div class="max-w-[56px] w-full h-[1px] bg-[#0059DF]"></div>
      </div>
    
     <div class="flex max-w-[74px] h-[22px] w-full rounded-[7px] border-[1px] border-[#ff0000] justify-center items-center cursor-pointer mr-[13px]" id="delete-button"  onclick='deleteDiv(this.parentNode)'>
      <span class="text-[12px] font-normal text-[#d60808]">Удалить</span>
     </div>
    </div>`;

    // Добавление div в родительский элемент
    var parentDiv = document.getElementById("Select-People");
    parentDiv.appendChild(div);
  }

  function deleteDiv(element) {
    // Удаление div
    element.parentNode.removeChild(element);
  }

