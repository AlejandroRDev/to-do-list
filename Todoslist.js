const input$$ = document.querySelector('input');
const list$$ = document.querySelector("[data-type='list']");
const button$$ = document.querySelector(".btn-add");
const completedText$$ = document.querySelector(".empty");
const taskToDo$$ = [];

button$$.addEventListener('click', (event) =>{
    event.preventDefault();

    const text =  input$$.value;
    console.log(text);
    const task$$ = document.createElement('div');
    const li$$ =  document.createElement('li');
    const buttonRemove$$ = document.createElement('button');
    buttonRemove$$.addEventListener('click', () =>{
        task$$.remove();
        completedText$$.innerHTML = `<p>All tasks are completed</p>`
    })
    buttonRemove$$.textContent = 'X';
    li$$.innerHTML = text;
    task$$.appendChild(li$$);
    task$$.appendChild(buttonRemove$$);
    list$$.appendChild(task$$);
    input$$.value = '';
    completedText$$.innerHTML = ``;
});


