const db = require('./_database')

async function updateData(){
    await db.connect()

    const queryUpdateNome = "UPDATE participante SET nome = ($1) WHERE id = ($2)"
    await db.query(queryUpdateNome,['Carlos Augusto',1])
    const queryUpdateEvento = "UPDATE participante SET nome = ($1) WHERE id = ($2)"
    console.log("Nome alterado")

    var result
    result = await db.query("SELECT * FROM participante ORDER BY id ASC")
    console.log("PARTICIPANTE:")
    console.log(result.rows);

    const queryUpdateEventoParticipante = "DELETE FROM evento_participante WHERE participante_id = ($1)"
    await db.query(queryUpdateEventoParticipante,[1])

    var result
    result = await db.query("SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id")
    console.log("EVENTOS COM PARTICIPANTES:")
    console.log(result.rows);

}

updateData()