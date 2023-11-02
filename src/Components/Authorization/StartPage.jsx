import style from './StartPage.module.css';
import Header from './Header/Header';
import Button from './Button';

import eye from './../../img/authorization/eye.svg';

import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './../../store/slice/userSlice';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

import { getDatabase, ref, set } from 'firebase/database';

const StartPage = (props) => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorMessage = useRef();
    const privacyPolice = useRef();
    const myCheckBox = useRef();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const submit = (e) => {
        e.preventDefault();
        const auth = getAuth();

        if (props.id === 'login') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    dispatch(
                        setUser({
                            email: userCredential.user.email,
                            id: userCredential.user.uid,
                            token: userCredential.user.accessToken,
                        })
                    );
                    navigate('/account');
                })
                .catch((error) => {
                    errorMessage.current.style.visibility = 'visible';
                });
        }

        if (props.id == 'signup') {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const db = getDatabase();
                    set(ref(db, 'users/' + userCredential.user.uid), {
                        name: 'Test1',
                        surname: 'Test2',
                        email: userCredential.user.email,
                        phone: 7_999_999_99_99,
                        cart: '',
                        addresses: '',
                    });

                    dispatch(
                        setUser({
                            email: userCredential.user.email,
                            id: userCredential.user.uid,
                            token: userCredential.user.accessToken,
                        })
                    );

                    navigate('/account');
                })
                .catch((error) => {
                    errorMessage.current.style.visibility = 'visible';
                });
        }
    };

    useEffect(() => {
        errorMessage.current.style.visibility = 'hidden';
        if (props.id == 'login') {  
            myCheckBox.current.removeAttribute('required');
            privacyPolice.current.style.visibility = 'hidden';
            myCheckBox.current.style.visibility = 'hidden';
        } else {
            myCheckBox.current.style.visibility = 'visible';
            myCheckBox.current.setAttribute('required', true)
            privacyPolice.current.style.visibility = 'visible';
        }
    }, [location]);

    const registrationGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                navigate('/account');
            })
            .catch((error) => {
                errorMessage.current.style.visibility = 'visible';
            });
    };

    const registrationTwitter = () => {
        // Sorry, banned
    };

    return (
        <div>
            <Header />
            <div className={style.content}>
                <div className={style.left_block}>
                    <img src={props.image} alt="login_image" />
                </div>
                <div className={style.right_block}>
                    <div className={style.right_block_content}>
                        <h1 className={style.title}>{props.title}</h1>
                        <p className={style.description}>{props.description}</p>
                        <div>
                            <Button
                                onClick={registrationGoogle}
                                image_btn={props.google_logo}
                                text="Google"
                            />
                            <Button
                                onClick={registrationTwitter}
                                image_btn={props.twitter_logo}
                                text="Twitter"
                            />
                        </div>
                        <div>
                            <form
                                className={style.form}
                                action=""
                                method="post"
                                onSubmit={submit}
                            >
                                <div className={style.field}>
                                    <label>User name or email address</label>
                                    <input
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className={style.input}
                                        type="email"
                                        placeholder="example@email.com"
                                        required
                                    />
                                </div>
                                <div className={style.field}>
                                    <div className={style.labelPassword}>
                                        <label>Password</label>
                                        <button
                                            className={style.btnShowPass}
                                            onClick={togglePasswordVisibility}
                                        >
                                            <div>
                                                <img
                                                    src={eye}
                                                    alt="show_hidden_password"
                                                />
                                                <p>Hide</p>
                                            </div>
                                        </button>
                                    </div>
                                    <input
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className={style.input}
                                        type={
                                            passwordVisible
                                                ? 'text'
                                                : 'password'
                                        }
                                        required
                                    />
                                </div>
                                <p ref={errorMessage} className={style.error}>
                                    {props.error_message}
                                </p>
                                <div
                                    className={style.rules}
                                    ref={privacyPolice}
                                >
                                    <input
                                        className={style.checkbox}
                                        type="checkbox"
                                        required
                                        ref={myCheckBox}
                                    />
                                    <label>
                                        Agree to our&nbsp;
                                        <NavLink className={style.link} to="/*">
                                            Terms of use
                                        </NavLink>
                                        &nbsp; and &nbsp;
                                        <NavLink className={style.link} to="/*">
                                            Privacy Policy
                                        </NavLink>
                                    </label>
                                </div>
                                <input
                                    type="submit"
                                    name="privacy"
                                    className={style.button}
                                    value={props.text_btn_submit}
                                />
                            </form>
                            <p className={style.question}>
                                {`${props.question}`}
                                &nbsp;
                                <NavLink to={props.link} className={style.link}>
                                    {props.href}
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
