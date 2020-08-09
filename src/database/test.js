const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
  //inserir dados
  proffyValue = {
    name:"Marina Matos", 
		avatar: "https://avatars2.githubusercontent.com/u/45432113?s=460&u=736b4b02bf1ee829de9b684492a20dda0ef77419&v=4", 
		whatsapp:"139999999", 
		bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  }

  classValue = {
    subject: 1, 
		cost:"20"		
  }

  classScheduleValue = [
    {
    weekday: 1,
		time_from: 720,
		time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValue})

  //consultar todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  

  //consultar as classes de um determinado proffy
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  
  //consultar pelo horário
  const selectClassesSchedule = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

})