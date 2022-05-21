import Joi from 'joi';

export const ChangePasswordValidator = Joi.object({
    email: Joi.string(),
    currentPassword: Joi.string(),
    repeatPassword: Joi.string(),
    newPassword:
        Joi.string()
            .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$'))
            .message('Пароль має бути не коротшим як 6 символів, містити цифри, великі та малі літери')
});