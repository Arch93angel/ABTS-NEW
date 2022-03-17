import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { auth } from '../services/user-services';
import { useAuth } from '../hooks/useAuth';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { authData, setAuth } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await auth({ 'username': username, 'password': password })


        setAuth(data);
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
                                        {authData && <p>{authData.user.username}</p>}
                                        <form onSubmit={handleSubmit}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx" label="Username" variant="standard" onChange={e => setUsername(e.target.value)} />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx1" label="Password" type='password' variant="standard" onChange={e => setPassword(e.target.value)} />
                                            </Box>
                                            <Stack direction="row" spacing={2}>
                                                <Button variant="contained" type='submit' >Login</Button>
                                                <Button href="/register">Register here</Button>
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

export default Login



// import React, { useState } from 'react';
// import { auth } from '../services/user-services';
// import { useAuth } from '../hooks/useAuth';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import KeyIcon from '@mui/icons-material/Key';


// function Login() {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');


//     const handleSubmit = async e => {
//         e.preventDefault();
//         const data = await auth({ username, password })





//         return (
//             <div className="vh-100" >
//                 <div className="container py-5 h-100">
//                     <div className="row d-flex justify-content-center align-items-center h-100">
//                         <div className="col col-xl-10">
//                             <div className='card'>
//                                 <div className="row g-0">
//                                     <div className="col-md-6 col-lg-5 d-none d-md-block">
//                                         <img
//                                             src="https://res.cloudinary.com/archangel93/image/upload/v1646815446/ABTS/logo/balance_of_trade_pqrrzs.png"
//                                             alt="login form"
//                                             className="img-fluid"
//                                         />
//                                     </div>
//                                     <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                                         <div className="card-body p-4 p-lg-5 text-black">

//                                             <form onSubmit={handleSubmit}>
//                                                 <Box sx={{ '& > :not(style)': { m: 1 } }}>
//                                                     <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                                                         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//                                                         <TextField id="input-with-sx" label="Enter your Username" variant="standard" onChange={e => setUsername(e.target.value)} />
//                                                     </Box>

//                                                     <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                                                         <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//                                                         <TextField id="input-with-sx" label="Password" variant="standard" type={'password'} onChange={e => setPassword(e.target.value)} />
//                                                     </Box>

//                                                 </Box>
//                                                 <div>
//                                                     <span className='login-button'>
//                                                         <button variant="contained" type='submit'>
//                                                             Register
//                                                         </button>
//                                                     </span>

//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Login
