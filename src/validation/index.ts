import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório").max(128, "Permitido no máximo 128 caracteres"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Sua senha deve conter pelo menos 8 caracteres")
    .max(16, "Sua senha deve conter no máximo 16 caracteres")
    .matches(/[a-z]/, "Sua senha deve conter pelo menos uma letra minúcula")
    .matches(/[A-Z]/, "Sua senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/, "Sua senha deve conter pelo menos um número")
    .matches(/\W/, "Sua senha deve conter pelo menos um caractere especial")
    .matches(/^(?!.*\s).{0,}$/, "Sua senha não pode conter espaços"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
});

export const clientSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório").max(128, "Permitido no máximo 128 caracteres"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  phone: yup.string().matches(/^\([1-9]{2}\)[9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/, "Telefone inválido"),
});
