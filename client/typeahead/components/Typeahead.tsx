import * as React from 'react'

export interface TypeaheadProps {};
export default class Typeahead extends React.Component<TypeaheadProps, undefined> {
    private items: string[] = [
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
    private currentQueryStr: string = ''
    render() {
        return <div
            className='typeahead'>
            <TypeaheadInput onChange={} />
            <ul>
                <li>
                    <div>Fortran</div>
                </li>
            </ul>
        </div>
    }
}

interface TypeaheadInputProps {onChange: (q: string) => void};
class TypeaheadInput extends React.Component<TypeaheadInputProps, undefined> {
    private handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        let val = e.currentTarget.value;
        this.props.onChange(val);
    }
    render() {
        return <input placeholder='please start typing...' onKeyUp={this.handleKeyUp} />
    }
}

