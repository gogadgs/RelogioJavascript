// seção para dinamizar as acoes na tela do relogio // 

UpdateTime = () => {
    let now = new Date(); // construtor nativa consultando a hora do momento // 
    let min = now.getMinutes(); // função nativa consultando minutos do momento // 
    let hour = (now.getHours() % 12) + min / 60; // horas fracionadas//
    let minAngle = min * 6; // 6 graus por minutos ( direcionamento dos ponteiros ) // 
    let hourAngle = hour * 30; // 30 graus por hora ( direcionamentos dos ponteiros ) // 

    // seção de concatenação com os elementos da pagina // 

    let minHand = document.getElementById("minuteHand");
    let hourHand = document.getElementById("hourHand");
    // mananger (configuração) dos elementos na tela setando valores e atributos//


    minHand.setAttribute("transform", "rotate(" + minAngle + ",50,50)"); // angulo do circulo 252// 
    hourHand.setAttribute("transform", " rotate ( " + hourAngle + ",50,50)"); // angulo da hora 21// 



    // atualização do relogio // 

    setTimeout(UpdateTime, 60000); // 60.000 milissegundos // 



}