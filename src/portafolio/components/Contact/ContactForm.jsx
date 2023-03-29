import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import './ContactForm.css'
import 'sweetalert2/dist/sweetalert2.css'

export const ContactForm = () => {

    const {formState} = useForm({
        name: '',
        email: '',
        password: ''
    }) 

  return (
    <>
        <Formik
            validate={(valores) => {

                let errores = {};

                if (!valores.name) {
                    errores.name = "Por favor ingresa un nombre";

                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                    errores.name =
                    "El nombre solo puede contener letras y espacios.";
                }

                if (!valores.email) {
                    errores.email = "Por favor ingresa un correo electronico.";
                } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.email
                    )
                ) {
                    errores.email = "El correo es invalido.";
                }

                if (!valores.message) {
                    errores.message = "Por favor ingresa un mensaje.";
                } else if (valores.message.length < 5) {
                    errores.message = "El mensaje es muy corto.";
                }

                return errores;
            }}

            onSubmit={(valores, { resetForm }) => {
                console.log("Enviado!!!!");
                resetForm();
                Swal.fire('Mensaje enviado', '', 'success')

            }}
            initialValues={{ ...formState }}
        >

        {({ errors }) => (

            <Form action="">

                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field id="name" type="text" name="name" placeholder="Name" />
                    <ErrorMessage name='name' 
                    component={()=> (<p className='error-message'>{errors.name}</p>)}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="text" name="email" placeholder="Mail" />
                    <ErrorMessage name='email' 
                    component={()=> (<p className='error-message'>{errors.email}</p>)}/>
                </div>

                <div>
                    <label htmlFor="message">Mensaje</label>
                    <Field as="textarea" placeholder="Mensaje" name="message" id="message" />
                    <ErrorMessage name="message" 
                    component={() => (<p className="error-message">{errors.message}</p>)} />
                </div>

                <div>
                    <button type='submit'>Enviar Mensaje</button>
                </div>

            </Form>
        )}

        </Formik>

    </>
  );
};
