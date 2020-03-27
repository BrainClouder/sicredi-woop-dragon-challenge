import React from 'react';
import { connect } from 'react-redux';
import { postDragon } from '../store/actions/main';
import Axios from 'axios';

interface IAddDragon {
    postThisDragon: (dragon: any) => void;
    goBack: () => void;
    loading: boolean;
}

const AddDragon: React.FC<IAddDragon> = ({ postThisDragon, loading, goBack }) => {
    const [inputData, setInput] = React.useState({
        name: '',
        histories: '',
        type: 'Terra',
        id: Math.floor(Math.random() * 99999 + 20),
        createdAt: '',
    })

    const handlerPostDragon = async () => {
        if (inputData.name.length === 0 || inputData.histories.length === 0) {

        } else {
            const dateNow = new Date().toISOString();
            const dragonToSend = {
                name: inputData.name,
                histories: inputData.histories,
                type: inputData.type,
                id: inputData.id,
                createdAt: dateNow
            }            
            await postThisDragon(dragonToSend);
            goBack();
        }
    }

    return (
        <div>
            add some dragons:
            <div style={{
                display: 'flex',
                flexDirection: 'column',

            }}>
                Dragon name:
            <div>
                    <input type="text"
                        disabled={loading}
                        value={inputData.name}

                        onChange={(event) => {
                            const a = event.target.value;
                            setInput((prevState) => {
                                return {
                                    ...prevState,
                                    name: a
                                }
                            })

                        }}
                    />
                </div>

            Dragon history:
            <div>
                    <input type="text"
                        disabled={loading}
                        value={inputData.histories}
                        onChange={(event) => {

                            const a = event.target.value;
                            setInput((prevState) => {
                                return {
                                    ...prevState,
                                    histories: a
                                }
                            })
                        }}
                    />
                </div>

            Dragon type:
            <div>
                    <select
                        disabled={loading}
                        onChange={(event) => {

                            const a = event.target.value;
                            setInput((prevState) => {
                                return {
                                    ...prevState,
                                    type: a
                                }
                            })
                        }}
                        value={inputData.type}
                    >
                        <option value="Terra">Terra</option>
                        <option value="Água">Água</option>
                        <option value="Fogo">Fogo</option>
                        <option value="Ar">Ar</option>
                    </select>
                </div>
                <div style={{ margin: '1em' }}>
                    <button onClick={handlerPostDragon}
                        disabled={loading}
                        style={{
                            cursor: 'pointer',
                            fontSize: 16,
                            padding: '0.3em 0.8em'
                        }}>salvar</button>
                        <button onClick={() => goBack()}>cancelar</button>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    const t = state;
    return {
        loading: t.blockSave
    }
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        postThisDragon: (dragon: any) => dispatch(postDragon(dragon)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddDragon);