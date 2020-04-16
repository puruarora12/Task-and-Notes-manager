let addNoteId = null

async function showNotes(id){
    id = Number(id)
    const resp = await fetch(`/tasks/${id}/notes`, { method: 'GET' })
    const notes = await resp.json()
    document.getElementById('id01').style.display='block'
    addNoteId = id
    document.getElementById('modalHeader').innerHTML = `Notes for Task ${id}`
    if(notes.error){
        document.getElementById('modalContent').innerHTML = 'No notes present for this task'
    }
    else{
        document.getElementById('modalContent').innerHTML = notes.note
    }
}

async function addNotes(){

    const note = document.getElementById('noteText').value + '\n'
    if(!note){
        alert('Note cannot be empty')
    }
    else{
        await fetch(`/tasks/${addNoteId}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ note })
        })
        const resp = await fetch(`/tasks/${noteId}/notes`, { method: 'GET' })
        const notes = await resp.json()
        document.getElementById('modalContent').innerHTML = notes.note
    } 
}