import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Register() {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const passMatch = () => {
        return password === password2;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (passMatch()) {
            console.log('All good', username, email, password, password2);
        }
        else {
            console.log("Password don't Match");
        }
    }

    return (
        <section className='vh-100'>
            <div className='container py-5 h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col col-xl-10'>
                        <div className='card'>
                            <div className='row g-0'>
                                <div className='col-md-6 col-lg-5 d-none d-md-block'>
                                    <Link to={'/homepage'}>
                                        <img src="https://res.cloudinary.com/archangel93/image/upload/v1646815446/ABTS/logo/balance_of_trade_pqrrzs.png" alt="ABTS" className='img-fluid' />
                                    </Link>
                                </div>

                                <div className='col-md-6 col-lg-7 d-flex align-items-center'>
                                    <div className='card-body p-4 p-lg-5 text-black'>
                                        <form onSubmit={handleSubmit}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx" label="Enter your Username" variant="standard" onChange={e => setUsername(e.target.value)} />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx1" label="Enter your Email" variant="standard" type={'email'} onChange={e => setEmail(e.target.value)} />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx2" label="Set Password" type='password' variant="standard" onChange={e => setPassword(e.target.value)} />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx3" label="Re-type Password" type='password' variant="standard" onChange={e => setPassword2(e.target.value)} />
                                            </Box>
                                            <Stack direction="row" spacing={2}>
                                                <Button variant="contained" type='submit' >Register</Button>
                                                <Button href="/login">Login</Button>
                                            </Stack>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Register



// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import KeyIcon from '@mui/icons-material/Key';
// import MailIcon from '@mui/icons-material/Mail';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';


// function Register() {

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [password2, setPassword2] = useState('');
//     const { authData, setAuth } = useAuth();
//     const handleSubmit = async e => {
//         e.preventDefault();

//     }


//     return (

//         <form onSubmit={handleSubmit}>

//             <Box sx={{ '& > :not(style)': { m: 1 } }}>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                     <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//                     <TextField id="input-with-sx" label="Enter your Username" variant="standard" onChange={e => setUsername(e.target.value)} />
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                     <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//                     <TextField id="input-with-sx" label="Enter your Email" variant="standard" onChange={e => setEmail(e.target.value)} />
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                     <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//                     <TextField id="input-with-sx" label="Password" variant="standard" type={'password'} onChange={e => setPassword(e.target.value)} />
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                     <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//                     <TextField id="input-with-sx" label="Enter Password Again " variant="standard" type={'password'} onChange={e => setPassword2(e.target.value)} />
//                 </Box>
//             </Box>
//             <div>
//                 <span className='login-button'>
//                     <button variant="contained" type='submit'>
//                         Register
//                     </button>
//                 </span>

//             </div>
//         </form>
//     )
// }

// export default Register