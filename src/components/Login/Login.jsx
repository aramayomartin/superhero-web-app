import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import '../../scss/Login.scss';
export default function Login() {
    let navigate = useNavigate();
    // states
    const [succes, setSucces] = useState(false);
    // to authenticate
    const emailP = 'zaeta@gmail.com';
    const passwordP = 'unoDos3cu@tro';
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(valores) => {
                    let errors = {};
                    // validacion email
                    if (!valores.email) { errors.email = 'Ingresa email'; }
                    else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) { errors.email = 'Ingresa email valido' }
                    // validacion password
                    if (!valores.password) { errors.password = 'Ingresa un password'; }
                    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(valores.password)) { errors.password = 'Ingrese contraseña valida.'; }
                    return errors;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    if (valores.email === emailP && valores.password === passwordP) {
                        setSucces(true);
                        setTimeout(() => {
                            setSucces(false);
                            navigate('/home');
                        }, 4000);
                    }
                    else { alert('Ingrese una combinacion de usuario y contraseña valida.') }
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
                    <section class='container-form'>
                        <h1>Ingresa para armar tu equipo!</h1>
                        <Form class='form-elements'>
                            <div class='form-elements-email'>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="text"
                                        id='email'
                                        name='email'
                                        placeholder="Email"
                                    />
                                </div>
                                <div class='form-elements-error-message'>
                                    <ErrorMessage name='email' component={() => (<p>{errors.email}</p>)} />
                                </div>
                            </div>
                            <div class='form-elements-password'>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        id='password'
                                        name='password'
                                        placeholder="password"
                                    />
                                </div>
                                <div class='form-elements-error-message'>
                                    <ErrorMessage class='form-elements-error-message' name='password' component={() => <p>{errors.password}</p>} />
                                </div>
                            </div>
                            <button class='button' type='submit'>Send!</button>
                        </Form>
                        {succes && <p className="exito">Bienvenido, redireccionando...</p>}
                    </section>
                )}
            </Formik>

        </>
    )
};





// CODIGO BASICO
/* export default function Login() {
    let navigate = useNavigate();
    // states
    const [succes, setSucces] = useState(false);
    // to authenticate
    const emailP= 'zaeta@gmail.com';
    const passwordP= 'unoDos3cu@tro';
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(valores) => {
                    let errores = {};
                    // validacion email
                    if (!valores.email) { errores.email = 'Ingresa email'; }
                    else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) { errores.email = 'Ingresa email valido' }
                    // validacion password
                    if (!valores.password) { errores.password = 'Ingresa un password'; }
                    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(valores.password)) { errores.password = 'Ingrese contraseña valida.'; }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    setSucces(true);
                    setTimeout(() => setSucces(false), 4000);
                    if(valores.email === emailP && valores.password === passwordP){
                        setTimeout(()=>navigate('home'),4000);
                    }
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
                    <div className={styles.all}>
                        <form className={styles.formulario} onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id='email'
                                    name='email'
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <div>{`${errors.email}`}</div>}
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id='password'
                                    name='password'
                                    placeholder="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.password && <div>{`${errors.password}`}</div>}
                            </div>
                            <button type='submit'>Send!</button>
                            {succes && <p className="exito">Bienvenido, redireccionando...</p>}
                        </form>
                    </div>
                )}
            </Formik>

        </>
    )
}; */

