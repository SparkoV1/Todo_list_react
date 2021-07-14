import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registration } from "../../../redux/api/auth.api";
import PasswordInput from "../PasswordInput";
import * as yup from "yup";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email("введи нормальную почту!").required("!!!"),
    password: yup.string().min(8, "Password must be more than 7 characters").required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match")
      .required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const register = ({ email, password }) => {
    dispatch(registration(email, password, reset));
  };

  return (
    <>
      <h2 className="login-page__title">Register</h2>
      <form onSubmit={handleSubmit(register)} className="login-page__form">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="Email*"
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />

        <PasswordInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} name="confirmPassword" label="Confirm password*" />

        <Button type="submit" fullWidth className="login-page__submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
