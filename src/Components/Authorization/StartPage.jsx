import style from './StartPage.module.css';
import Header from './Header/Header';
import Button from './Button';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './../../firebase';

const StartPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const myRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();

        if (props.id == 'login') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigate('/account');
                })
                .catch((error) => {
                    // ! Сделать обработку
                    const el = myRef.current;
                    el.style.visibility = 'visible'; 
                });
        } else if (props.id == 'signup') {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigate('/account');
                })
                .catch((error) => {
                    // ! Сделать обработку
                    const el = myRef.current;
                    el.style.visibility = 'visible';
                });
        }
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
                                image_btn={props.google_logo}
                                text="Google"
                            />
                            <Button
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
                                    <label>Password</label>
                                    <input
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className={style.input}
                                        type="password"
                                        required
                                    />
                                </div>
                                <p ref={myRef} className={style.error}>
                                    Login or password error
                                </p>
                                <input
                                    type="submit"
                                    className={style.button}
                                    value={props.text_btn_submit}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
