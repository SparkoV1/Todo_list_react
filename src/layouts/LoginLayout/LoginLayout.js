import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import PasswordInput from "./PasswordInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginLayout.scss";
import Logger from "../../utils/Logger";

const LoginLayout = () => {
  const schema = yup.object().shape({
    email: yup.string().email("введи нормальную почту!").required("!!!"),
    password: yup.string().min(8, "Password must be more than 7 characters").required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }) => {
    Logger.info(email, password);
  };

  return (
    <div className="login-page">
      <h2 className="login-page__title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-page__form">
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

        <Button type="submit" fullWidth className="login-page__submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginLayout;
