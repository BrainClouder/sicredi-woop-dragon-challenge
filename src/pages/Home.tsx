import React from 'react';
import { loadDragon } from '../store/actions/main';
import { connect } from 'react-redux';
import AddDragon from '../_components/AddDragon';
import DragonShow from '../_components/DragonShow';

interface IHome {
    reload: () => void;
    dragons: any;
}

const Home: React.FC<IHome> = ({
    dragons,
    reload
    
}) => {
    const [dragonToAdd, addSomeDragon] = React.useState(false);
    const [toEdit, setEdit] = React.useState(-1);

    return (
        <div>
            <div style={{
                backgroundColor: '#F56A53',
                position: 'fixed',
                top: 0, width: '100vw',
                boxShadow: '2px 2px 1px black',
                padding: '0.5em',
                fontSize: 20
            }}>
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
            {
                        dragons.map((d: any) =>
                            <DragonShow dragon={d} key={d.id} setEdit={setEdit} edit={d.id === toEdit} />
                            // <div style={{
                            //     backgroundColor: '#fff',
                            //     margin: '0.5em',
                            //     // borderRadius: '100px',
                            //     textAlign: 'left', padding: '0.5em 1em',
                            //     display: 'flex', flexDirection: 'row',
                            //     alignItems: 'center', justifyContent: 'space-between'
                            // }}>
                            //     <div>
                            //         <div>
                            //             Nome: {d.name}
                            //         </div>
                            //         <div>
                            //             Sobre: {d.histories}
                            //         </div>
                            //         <div style={{
                            //             fontSize: 12,

                            //         }}>
                            //             Criado em: {parseISOstring(d.createdAt)}
                            //         </div>
                            //     </div>
                            //     <div>
                            //         Tipo: {d.type}
                            //     </div>
                            //     <div onClick={() => setEdit(d.id)}>
                            //         edit
                            //     </div>

                            //     <div style={{
                            //         cursor: 'pointer'
                            //     }}
                            //         onClick={() => delDragon(d)}>
                            //         delete dis
                            // </div>
                            // </div>
                            )}
                </div>


                {dragonToAdd ? <AddDragon goBack={() => addSomeDragon(false)} /> : <button onClick={() => addSomeDragon(true)} >Add</button>}
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);