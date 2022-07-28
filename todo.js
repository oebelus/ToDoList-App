
window.addEventListener('load', () => {
    const input = document.querySelector('#new-task-input')
    const form = document.querySelector('#new-task-form')
    const list = document.querySelector('#tasks')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const task = input.value
        if (task !== '') {

            const taskElement = document.createElement('div')
            taskElement.classList.add('task')

            const taskContent = document.createElement('div')
            taskContent.classList.add('content')

            const actions = document.createElement('div')
            actions.classList.add('actions')

            const text = document.createElement('input')
            text.classList.add('text')

            const taskInput = document.createElement('input')
            taskInput.classList.add('text')
            taskInput.type = 'text'
            taskInput.value = task
            taskInput.setAttribute('readonly', 'readonly')

            const edit = document.createElement('button')
            edit.classList.add('edit')
            edit.innerHTML = 'Edit'

            const deleted = document.createElement('button')
            deleted.classList.add('delete')
            deleted.innerHTML = 'Delete'

            actions.appendChild(edit)
            actions.appendChild(deleted)
            
            taskElement.appendChild(taskContent)
            taskElement.appendChild(actions)

            taskContent.appendChild(taskInput)

            list.appendChild(taskElement)

            input.value = ""

            edit.addEventListener('click', () => {
                if (edit.innerHTML.toLowerCase() == 'edit') {
                    taskInput.removeAttribute('readonly')
                    taskInput.focus()
                    edit.innerHTML = 'Save'
                }
                else {
                    taskInput.setAttribute('readonly', 'readonly')
                    edit.innerHTML = "Edit"
                }
            })

            deleted.addEventListener('click', () => {
                taskElement.remove()
            })

        }
        
    })
})
