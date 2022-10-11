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
// seção função relogio digital//
const getHours = () => {
    // todas as variaveis constantes para nao mudar seu valor perante o sistema operacional//
    const clock = document.getElementById('relogioDigital') // pega classe ou id(getElementByClassName ou getElementById) elemento html com indexação em zero //
    const date = new Date() // herança do construtor nativo javaScript//
    const hours = date.getHours() // consulta hora e atribui a variavel //
    const minutes = date.getMinutes() // consulta minuto//
    const seconds = date.getSeconds() // consulta segundos//
    const hour = hours < 10 ? `0${hours}` : hours // atribui um digito 0 se for menor que 10 horas template string //
    const minute = minutes < 10 ? `0${minutes}` : minutes // atribui um digito 0 se for menor que 10 minutos template string //
    const second = seconds < 10 ? `0${seconds}` : seconds // atribui um digito 0 se for menor que 10 segundos template string //
    clock.innerHTML = `${hour}:${minute}:${second}` // inserção da hora no elemento de visualização do html//
}

setInterval(() => {
    getHours()
});