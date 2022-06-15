import express from "express"

const server = express();

const holidays = [
    { date: "01/01/2022", name: "Confraternização mundial" },
    { date: "03/01/2022", name: "Carnaval" },
    { date: "17/04/2022", name: "Páscoa" },
    { date: "21/04/2022", name: "Tiradentes" },
    { date: "01/05/2022", name: "Dia do trabalho" },
    { date: "16/06/2022", name: "Corpus Christi" },
    { date: "07/09/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "02/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
];

server.get(`/holidays`, (request, response) => {
    response.send(holidays);
})

server.get("/is-today-holiday", (request, response) => {
    for(let i = 0; i < holidays.length; i ++){
        if(holidays[i].date === hoje.toLocaleDateString()){
            response.send(`Sim, hoje é ${holidays[i].name}`)
        }else{
            response.send("Não, hoje não é feriado")
        }
    }
})

server.get(`/holidays/:monthId`, (request, response) => {
    const id = request.params.monthId;
    let monthHoliday = [];
    for(let i = 0; i < holidays.length; i++){
        if(id.length === 1){
            if("0"+id === "0"+holidays[i].date[4]){
                monthHoliday.push(holidays[i].name);
            }
        }else{
            if(id === (holidays[i].date[3] + holidays[i].date[4])){
                monthHoliday.push(holidays[i].name);
            }
        }
        
    }
    response.send(monthHoliday);
})

server.listen(5000);
const hoje = new Date();
