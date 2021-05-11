import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name} className="label-form">{label}</label>
            <input className="text-input form-control form-control-sm" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" className="form-check-input" {...field} {...props} />
                <span className="checkboxinput">{children}</span>
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name} className="label-form">{label}</label>
            <select className="form-select form-select-sm" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

// And now we can use these
const SignupForm = () => {
    return (
        <div className="signupform">
            <h6>Sign up now to start your free sales trial.</h6>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                    password: '',
                    changepassword: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    phone: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Required'),
                    company: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    password: Yup.string()
                        .required('No password provided.')
                        .min(8, 'Password is too short - should be 8 chars minimum.')
                        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/, 'Password can only contain Latin letters.'),
                    confirmpassword: Yup.string().when("password", {
                        is: val => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                        )
                    }),
                    jobType: Yup.string()
                        .oneOf(
                            ['Sales Manager', 'Marketing/ PR Manager', 'Customer Service Manager', 'CxO / General Manager',
                                'IT Manager', 'Operations Manager', 'Developer / Software Engineer / Analyst',
                                'Student / Personal Interest', 'Others'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                    employees: Yup.string()
                        .oneOf(
                            ['1-15 employees', '15-100 employees', '101-500 employees', '501-1500 employees',
                                '1501+ employees'],
                            'Invalid emloyees'
                        )
                        .required('Required'),
                })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>

                    <div className="row">
                        <div className="col">
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="col">
                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <MyTextInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder=""
                            />
                        </div>
                        <div className="col">
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Select a job type</option>
                                <option>Sales Manager</option>
                                <option>Marketing/ PR Manager</option>
                                <option>Customer Service Manager</option>
                                <option>CxO / General Manager</option>
                                <option>IT Manager</option>
                                <option>Operations Manager</option>
                                <option>Developer / Software Engineer / Analyst</option>
                                <option>Student / Personal Interest</option>
                                <option>Others</option>

                            </MySelect>
                        </div>
                    </div>

                    <MyTextInput
                        label="Company"
                        name="company"
                        type="text"
                        placeholder=""
                    />

                    <MySelect label="Employees" name="employees">
                        <option value="">Employees</option>
                        <option>1-15 employees</option>
                        <option>15-100 employees</option>
                        <option>101-500 employees</option>
                        <option>501-1500 employees</option>
                        <option>1501+ employees</option>
                    </MySelect>

                    <div className="row">
                        <div className="col">
                            <MyTextInput
                                label="Phone"
                                name="phone"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="col">
                            <MySelect label="Country" name="country">
                                <option>Select your country</option>
                                <option>India</option>

                            </MySelect>
                        </div>
                    </div>


                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder=""
                    />

                    <MyTextInput
                        label="Confirm Password"
                        name="confirmpassword"
                        type="password"
                        placeholder=""
                    />

                    <br />

                    <div className="row">
                        <MyCheckbox name="acceptedTerms">
                            I accept the terms and conditions
                        </MyCheckbox>
                    </div>

                    <p className="terms">By registering, you confirm that you agree to the storing and processing of
                    your personal data by Salesforce as described in the
                        <a href="https://www.hangingpanda.com/" className="text-decoration-none"> Privacy Statement.</a>
                    </p>

                    <div className="row">
                        <button type="submit" className="btn btn-primary btn-sm">START FREE TRIAL / REGISTER</button>
                    </div>


                </Form>
            </Formik >
        </div >
    );
};

export default SignupForm