import { Button, Dialog, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import DialogDelete from "../../components/DialogDelete/DialogDelete";
import { ROUTES } from "../../constants";
import StoreContext from "../../StoreContext";
import PasswordInput from "./PasswordInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginLayout.scss";

const LoginLayout = () => {
  const { setIsAuth, setUsername, setRegisteredUsers } = useContext(StoreContext);

  const { push } = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("введи нормальную почту!").required("!!!"),
    password: yup.string().min(8, "Password must be more than 7 characters").required(),
  });

  const {
    control,
    register,
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
    const newUser = { email, password };
    setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);

    setIsAuth(true);
    localStorage.setItem("auth", "true");
    push(ROUTES.todos);
    setUsername(email);
  };

  // console.log("errors", errors);

  const [isDialogOpened, setIsDialogOpened] = useState(false);

  return (
    <>
      <Button>ahgsdjhsa</Button>
      {/*<DialogRegister isDialogOpened={isDialogOpened} />*/}
      {/*<Dialog open={true}>*/}
      {/*  <div className="login-page">*/}
      {/*    <h2 className="login-page__title">Login</h2>*/}
      {/*    <form onSubmit={handleSubmit(onSubmit)} className="login-page__form">*/}
      {/*      <input {...register("example")} />*/}

      {/*      <Controller*/}
      {/*        name="email"*/}
      {/*        control={control}*/}
      {/*        render={({ field }) => {*/}
      {/*          return (*/}
      {/*            <TextField*/}
      {/*              label="Email*"*/}
      {/*              variant="outlined"*/}
      {/*              size="small"*/}
      {/*              fullWidth*/}
      {/*              margin="dense"*/}
      {/*              error={!!errors.email?.message}*/}
      {/*              helperText={errors.email?.message}*/}
      {/*              {...field}*/}
      {/*            />*/}
      {/*          );*/}
      {/*        }}*/}
      {/*      />*/}

      {/*      <PasswordInput control={control} errors={errors} />*/}

      {/*      <Button type="submit" fullWidth className="login-page__submit" variant="contained" color="primary">*/}
      {/*        Login*/}
      {/*      </Button>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</Dialog>*/}
    </>
  );
};

export default LoginLayout;
