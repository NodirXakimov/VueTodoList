new Vue({
    el: '#app',
    data: {
        todo: "",
        editing: false,
        editingId: null,
        emptyInput: false,
        todos: [
            {
                id: 1, 
                isComplete: false ,
                text: 'Buying a new outfit'
            },
            {
                id: 2,
                isComplete: true,
                text: 'Buying a new house in the center of the city'
            }
        ],
    },
    methods: {
        createTodo(){
            if(this.editing){
                this.todos.find(todo => todo.id == this.editingId).text = this.todo;
                this.todo = "";
                this.editing = false;
                this.editingId = "";
                return;
            };
            if(this.todo){
                this.todos.push({
                    id: this.todos.length + 1,
                    isComplete: false, 
                    text: this.todo
                });
            }
            else {
                this.emptyInput = true;
                setTimeout( () => this.emptyInput = false, 1000);
            }
            this.todo = "";
        },
        editTodo(id){
            this.editing = true;
            this.todo = this.todos.find(todo => todo.id === id ).text;
            this.editingId = id;
        },
        deleteTodo(id){
            let index = '';
            this.todos.forEach((todo, i) => {
                if(todo.id == id)
                index = i;
            });
            if(index !== '')
            this.todos.splice(index, 1);
        },
        completeTodo(id){
            this.todos.filter(todo => {
               return todo.id == id;
            })[0].isComplete = true;
        }
    },
    computed: {
        countOfCompleted(){
            return this.todos.filter(todo => todo.isComplete == true).length;
        },
        countOfUncompleted(){
            return this.todos.filter(todo => todo.isComplete == false).length;
        },
    }
})