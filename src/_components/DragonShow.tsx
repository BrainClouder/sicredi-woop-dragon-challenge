import React from 'react';
import { loadDragon, deleteDragon, editDragon } from '../store/actions/main';
import { connect } from 'react-redux';


interface IEditDragon {
    dragon: any;
    delDragon: (e: any) => void;
    setEdit: (e: number) => void;
    editDragon: (e: any) => void;
    edit: boolean;
}

const DragonShow: React.FC<IEditDragon> = ({ dragon, delDragon, setEdit, edit, editDragon }) => {
    const [inputData, setInput] = React.useState({
        name: dragon.name,
        histories: dragon.histories,
        type: dragon.type,
        id: dragon.id,
        createdAt: dragon.createdAt,
    });

    const parseISOstring = (datestamp: string) => {
        const parsed = new Date(datestamp);
        const newString = `${parsed.toLocaleDateString()} - ${parsed.toLocaleTimeString()}`
        return newString;
    }

    const handlerEditInput = (event: { target: { value: string } }, type: string) => {
        const value = event.target.value;
        setInput((prevState) => {
            return {
                ...prevState,
                [type]: value,
            }
        })
    }



    return (
        <div style={{
            backgroundColor: '#fff',
            margin: '0.5em',
            // borderRadius: '100px',
            textAlign: 'left', padding: '0.5em 1em',
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between'
        }}>


            <div>
                <div>
                    Nome: {edit ? <input value={inputData.name} onChange={(event) => handlerEditInput(event, 'name')} /> : dragon.name}
                </div>
                <div>
                    Sobre: {edit ? <input value={inputData.histories} onChange={(event) => handlerEditInput(event, 'histories')} /> : dragon.histories}
                </div>
                <div style={{
                    fontSize: 12,

                }}>
                    Criado em: {parseISOstring(dragon.createdAt)}
                </div>
            </div>
            <div>
                Tipo: {edit ?
                    <select value={inputData.type} onChange={(event) => handlerEditInput(event, 'type')} >
                        <option value="Terra">Terra</option>
                        <option value="Água">Água</option>
                        <option value="Fogo">Fogo</option>
                        <option value="Ar">Ar</option>
                    </select>
                    :
                    dragon.type}
            </div>
            <div style={{
                alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
                <button style={{
                    cursor: 'pointer'
                }}
                    onClick={() => setEdit(edit ? -1 : dragon.id)}>
                    {edit ? 'cancel' : 'edit'}
                </button>
                {
                    edit ? <button onClick={() => {
                        setEdit(-1);
                        editDragon(inputData);
                    }}>save</button> : ''
                }
            </div>
            <button style={{
                cursor: 'pointer',
                backgroundColor: '#faa'
            }}
                onClick={() => delDragon(dragon)}>
                X
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        delDragon: (e: any) => dispatch(deleteDragon(e)),
        editDragon: (e: any) => dispatch(editDragon(e)),
    }
}

export default connect(null, mapDispatchToProps)(DragonShow);
