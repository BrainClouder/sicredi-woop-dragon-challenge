import React from 'react';
import { connect } from 'react-redux';
import { ACTIONS } from '../store/actions/main';
import { Redirect } from 'react-router';

interface ILogin {
    doLogin: () => void;
    logged: boolean;
}

const Login: React.FC<ILogin> = ({doLogin, logged}) => {
    const [register, doRegister] = React.useState(false);
    const loginForm = [
        {
            type: 'mail',
            placeholder: '',
            verified: false,
            error: false,
            label: 'E-mail',
            value: '',
        },
        {
            type: 'password',
            placeholder: '******',
            verified: false,
            error: false,
            label: 'password',
            value: '',
        }
    ];
    const registerForm = [
        {
            type: 'text',
            placeholder: 'username',
            verified: false,
            error: false,
            label: 'Your name',
            value: '',
        },
        {
            type: 'mail',
            placeholder: '',
            verified: false,
            error: false,
            label: 'E-mail',
            value: '',
        },
        {
            type: 'mail',
            placeholder: '',
            verified: false,
            error: false,
            label: 'Confirm your e-mail',
            value: '',
        },
        {
            type: 'password',
            placeholder: '******',
            verified: false,
            error: false,
            label: 'password',
            value: '',
        },
        {
            type: 'password',
            placeholder: '******',
            verified: false,
            error: false,
            label: 'Confirm your password',
            value: '',
        },
    ];
    const formConstructor = (obj: object[]) => {
        return (
            logged ? 
            <Redirect to={'/home'} />
            :
            <div style={{
                margin: '20px'
            }}>
                {
                    obj.map((e: any, index: number) => <div>
                        <div style={{
                            fontSize: 22, textAlign: 'center', margin: '5px'
                        }}>
                            {e.label}
                        </div>
                        <input
                            style={{
                                borderRadius: '10px',
                                border: '',
                                fontSize: 22,
                                textAlign: 'center'
                            }}

                            type={e.type} placeholder={e.placeholder}
                        />
                    </div>)
                }
            </div>
        )
    }

    return (
    <div>
        <div style={{
            backgroundColor: '#f3f3f7',
            width: '350px',
            borderRadius: '20px',
            margin: '10vh auto',
            paddingBottom: '1em'
        }}>
            <div style={{
                flexWrap: 'wrap', display: 'flex',
                flexDirection: 'row', justifyContent: 'space-evenly'

            }}>
                <div onClick={() => !register ? '' : doRegister(false)}
                    style={{
                        cursor: !register ? '' : 'pointer',
                        width: '165px',
                        textAlign: 'center',
                        fontSize: 32,
                        padding: '5px',
                        borderBottomRightRadius: '25px',
                        backgroundColor: !register ? '' : '#473b3f'
                    }}>
                    Sign-up
                    </div>
                <div onClick={() => register ? '' : doRegister(true)}
                    style={{
                        cursor: register ? '' : 'pointer',
                        width: '165px',
                        textAlign: 'center',
                        fontSize: 32,
                        padding: '5px',
                        borderBottomLeftRadius: '25px',
                        backgroundColor: register ? '' : '#473b3f'
                    }}>
                    Register
                    </div>

            </div>
            <div style={{
                margin: '0 auto', justifyContent: 'center', display: 'flex'
            }}>
                {formConstructor(register ? registerForm : loginForm)}
            </div>
            <div style={{
                textAlign: 'center',
                margin: '15px',
            }}>
                <a 
                onClick={doLogin}
                style={{
                    fontSize: 22,
                    backgroundColor: '#e63746',
                    padding: '10px 20px',
                    borderRadius: '10px', color: '#fff', fontWeight: 'bold'
                }}>ENTRAR</a>
            </div>

        </div>
    </div>)
}

const mapStateToProps = (state: any) => {
    const t = state;
    return {
        logged: t.logged,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
      doLogin: () => dispatch({type: ACTIONS.doTheLoginStuff}),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Login);
