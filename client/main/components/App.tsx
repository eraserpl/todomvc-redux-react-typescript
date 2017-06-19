import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import * as React from 'react';

import {
    Header,
    MainSection,
    model,
    addTodo,
    editTodo,
    clearCompleted,
    completeAll,
    completeTodo,
    deleteTodo
} from '../../todos';

import Typeahead from '../../typeahead/components/Typeahead'

interface AppProps {
    todos: model.Todo[];
    dispatch: Dispatch<{}>;
}

const SONG_LIST: string[] = [
    'Ничего, что я без стука',
    'В круге света',
    'Элементы счастья',
    'Пело тело',
    'Качели',
    'Поэзия',
    'Охота на русских',
    'Месяц май',
    'Листопад',
    'Северная сказка',
    'Пустота',
    'Оставайся'
]
class App extends React.Component<AppProps, void> {
    render() {
        const {todos, dispatch} = this.props;

        return (
            <div>
                <div className="todoapp">
                    <Header addTodo={(text: string) => dispatch(addTodo(text))} />
                    <MainSection
                        todos={todos}
                        editTodo={(t, s) => dispatch(editTodo(t, s))}
                        deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
                        completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
                        clearCompleted={() => dispatch(clearCompleted())}
                        completeAll={() => dispatch(completeAll())} />
                </div>
                <Typeahead selectItems={SONG_LIST} />
                <Typeahead selectItems={SONG_LIST} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);
