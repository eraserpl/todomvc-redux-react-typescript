import * as React from 'react'

export interface TypeaheadProps {selectItems: any[]};
interface TypeaheadState {opened: boolean, appropriateItems: string[]};
export default class Typeahead extends React.Component<TypeaheadProps, TypeaheadState> {
    constructor(props: TypeaheadProps) {
        super(props);
        this.state = {opened: false, appropriateItems: []};
    }
    render() {
        return <div
            className='typeahead'>
            <TypeaheadInput onChange={(qStr: string) => this.setState(
                {
                    opened: true,
                    appropriateItems: this.props.selectItems.filter(item => item.indexOf(qStr) != -1)
                }
            )} />
            <ul className={this.state.opened && this.state.appropriateItems.length > 0 ? 'opened' : null}>
                {this.state.appropriateItems.map(item => (
                    <li key={item}>
                        <div>{item}</div>
                    </li>
                ))}
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
        return <input placeholder='please start typing...' onKeyUp={this.handleKeyUp.bind(this)} />
    }
}

interface TypeaheadMenuProps {};
class TypeaheadMenu extends React.Component<TypeaheadMenuProps, undefined> {
    
}

