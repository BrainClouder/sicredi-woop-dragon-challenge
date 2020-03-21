import React from 'react';

const Login: React.FC = () => {
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
                                borderRadius: '20px',
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

    return (<div>
        <div style={{
            backgroundColor: '#808969',
            width: '350px',
            borderRadius: '20px',
            borderBottomRightRadius: '35%',
            borderBottomLeftRadius: '35%',
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
                <a style={{
                    fontSize: 22,
                    backgroundColor: '#f56a53',
                    padding: '10px 20px',
                    borderRadius: '10px', color: '#fff', fontWeight: 'bold'
                }}>ENTRAR</a>
            </div>

        </div>
    </div>)
}

export default Login;