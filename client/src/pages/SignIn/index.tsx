import { FormEvent } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { authStore } from "@shared/stores/authStore";
import { ROUTE } from "../routes";

export default function SignInPage() {
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);

      await authStore.login(data);
      navigate(ROUTE.MAIN);
    } catch {
      // TODO:
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти в аккаунт
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Имя пользователя"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={`${ROUTE.MAIN}`}>На главную</Link>
            </Grid>
            <Grid item>
              <Link to={`/${ROUTE.SIGN_UP}`}>
                Ещё не зарегистрированы? Создать аккаунт...
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
