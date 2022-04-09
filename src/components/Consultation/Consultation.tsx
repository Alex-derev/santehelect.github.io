import React, {
    useState
}                           from 'react';
import classNames           from 'classnames';
import InputMask            from 'react-input-mask';

import validationService, {
    validateTypes
}                           from '../../services/ValidationService';
import Section              from '../@Section/Section';

import './scss/style.scss';

const initialState = {
    name: false,
    phone: false,
    email: false,
};

const valuesState = {
    name: '',
    phone: '',
    email: '',
};

const Consultation: React.FC = () => {
    const [focus, setFocus]   = useState<typeof initialState>(initialState);
    const [values, setValues] = useState<typeof valuesState>(valuesState);
    const [errors, setErrors] = useState<typeof initialState>(initialState);

    const handleFocus = (key: validateTypes): void => {
        setFocus(prevState => {
            return {
                ...prevState,
                [key]: true
            }
        });
    };

    const handleBlur = (key: validateTypes, event: React.FocusEvent<HTMLInputElement>): void => {
        const {isValid, errors} = validationService.validate(key, event.target.value);

        setErrors(prevState => {
            return {
                ...prevState,
                [key]: errors.length > 0 ? errors[0] : false,
            }
        })

        setFocus(prevState => {
            return {
                ...prevState,
                [key]: !isValid || !validationService.isEmptyValue(event.target.value),
            }
        });
    };

    const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prevState => {
            return {
                ...prevState,
                [key]: event.target.value,
            }
        });
    };

    const handleSubmit = (e: any) => {

    };

    return (
        <Section
            id={''}
            classes={{
                classesSection: ['consultation'],
                classesTitle: [''],
                classesWrapper: ['consultation_wrapper']
            }}
            title='Закажите бесплатную консультацию'
        >
            <form id="consultation-form" className="consultation_form" onSubmit={handleSubmit}>
                <div className="form_name">
                    <label  htmlFor="name" className={classNames(focus.name ? 'focus' : '', errors.name ? 'error' : '')}>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={e => handleChange('name', e)}
                            value={values.name}
                            onFocus={() => handleFocus('name')}
                            onBlur={e => handleBlur('name', e)}
                            required
                        />
                        <span>Ваше имя</span>
                    </label>
                    {errors.name && <div className={'error'}>{errors.name}</div>}
                </div>
                <div className="form_phone">
                    <label htmlFor="phone" className={classNames(focus.phone ? 'focus' : '', errors.phone ? 'error' : '')}>
                    <InputMask
                        mask="+375 (99) 999-99-99"
                        id="phone"
                        name="phone"
                        type="tel"
                        onChange={(e: any) => handleChange('phone', e)}
                        value={values.phone}
                        onFocus={() => handleFocus('phone')}
                        onBlur={(e: any) => handleBlur('phone', e)}
                        required
                    />
                        <span>Ваш телефон</span>
                    </label>
                    {errors.phone && <div className={'error'}>{errors.phone}</div>}
                </div>
                <div className="form_email">
                    <label htmlFor="email" className={classNames(focus.email ? 'focus' : '', errors.email ? 'error' : '')}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={(e: any) => handleChange('email', e)}
                            value={values.email}
                            onFocus={() => handleFocus('email')}
                            onBlur={(e: any) => handleBlur('email', e)}
                            required
                        />
                        <span>Ваш e-mail</span>
                    </label>
                    {errors.email && <div className={'error'}>{errors.email}</div>}
                </div>
                <div className="consultation_form__button">
                    <button type="submit">Получить консультацию</button>
                    <span></span>
                </div>
            </form>
        </Section>
    )
};

export default Consultation;