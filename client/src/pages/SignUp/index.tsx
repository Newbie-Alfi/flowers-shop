import { FormEvent } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { authApi } from "@api/auth/index";
import { ROUTE, useRoute } from "../routes";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { toMain, toSignIn } = useRoute();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);

      await authApi().signUp(data);

      navigate(ROUTE.SIGN_IN);
    } catch (error) {
      // TODO:
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          pl: 4,
          pr: 4,
          pt: 8,
          pb: 8,
          maxWidth: 460,
          minWidth: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{ mb: 4 }} component="h1" variant="h5">
          Регистрация
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Логин"
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Почта"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password2"
                label="Повтор пароля"
                type="password"
                id="password2"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="first_name"
                label="Имя"
                name="first_name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="last_name"
                label="Фамилия"
                name="last_name"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегистрироваться
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Typography onClick={toMain} variant="caption">
              На главную
            </Typography>

            <Typography onClick={toSignIn} variant="caption">
              Уже есть аккаунт?
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
