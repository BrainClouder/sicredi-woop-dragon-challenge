import React from 'react';
import { loadDragon, deleteDragon } from '../store/actions/main';
import { connect } from 'react-redux';
import Axios from 'axios';

interface IHome {
    reload: () => void;
    dragons: any;
    delDragon: (e: any) => void;
}

const Home: React.FC<IHome> = ({
    dragons,
    reload,
    delDragon
}) => {

    const parseISOstring = (datestamp: string) => {
        const parsed = new Date(datestamp);
        const newString = `${parsed.toLocaleDateString()} - ${parsed.toLocaleTimeString()}`
        return newString;
    }
    return (<div>
        <div style={{
            backgroundColor: '#F56A53',
            position: 'fixed',
            top: 0, width: '100vw',
            boxShadow: '2px 2px 1px black',
            padding: '0.5em',
            fontSize: 20
        }}>
            {/* <div>
                <button>📋</button>
            </div> */}
            <div>
                <span aria-label="emoji" role="img">📋</span>
            
            </div>
        </div>
        <div style={{
            margin: '10vh auto',
            width: '350px',
            textAlign: 'center',
            backgroundColor: '#808969',
            padding: '1.5em'
        }}>
            <div>
                Come see the dragons
            <button onClick={() => reload()}>load dragons</button>
            </div>
            <div>
                here some dragon list:
            {dragons.map((d: any) =>
                <div style={{
                    backgroundColor: '#473b3f',
                    margin: '0.5em',
                    // borderRadius: '100px',
                    textAlign: 'left', padding: '0.5em 1em',
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <div>
                        <div>
                            Nome: {d.name}
                        </div>
                        <div>
                            Sobre: {d.histories}
                        </div>
                        <div style={{
                            fontSize: 12,

                        }}>
                            Criado em: {parseISOstring(d.createdAt)}
                        </div>
                    </div>
                    <div>
                        Tipo: {d.type}
                    </div>
                    <div style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => delDragon(d) }>
                        delete dis
                        </div>
                </div>)}
            </div>


            <div>
                add some dragons:
            <div>
                    <input type="text" />
                    <input type="text" />
                    <select>
                        <option value="Terra">Terra</option>
                        <option value="Água">Água</option>
                        <option value="Fogo">Fogo</option>
                        <option value="Ar">Ar</option>
                        
                    </select>
                    <button>send</button>

                </div>
            </div>
        </div>
    </div>)
}

const mapStateToProps = (state: any) => {
    return {
        dragons: state.dragonList,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        reload: () => dispatch(loadDragon()),
        delDragon: (e: any) => dispatch(deleteDragon(e)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);