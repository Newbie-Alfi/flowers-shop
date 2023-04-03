import { FormEvent } from "react";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { authStore } from "@shared/stores/authStore";
import { ROUTE, useRoute } from "../routes";

export default function SignInPage() {
  const navigate = useNavigate();
  const { toMain, toSignUp } = useRoute();
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
          minHeight: 400,
          height: "100%",
          maxHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{ mb: 4 }} component="h1" variant="h5">
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
            sx={{ mt: 4, mb: 2 }}
          >
            Войти
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Typography onClick={toMain} variant="caption">
              На главную
            </Typography>

            <Typography onClick={toSignUp} variant="caption">
              Ещё не зарегистрированы? Создать аккаунт...
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
