import { Box, Paper, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar/Avatar";
import { authStore } from "@shared/stores/authStore";
import { observer } from "mobx-react-lite";

export const UserPage = observer(() => {
  console.log();
  return (
    <Paper sx={{ p: 2, mb: 4 }}>
      <Box sx={{}} display="flex" flexDirection="column">
        <Box display="flex" sx={{ flexWrap: "wrap", gap: 3 }}>
          <Paper sx={{ p: 2, mt: 4, mb: 4 }}>
            Имя фамилия
            <Avatar />
            <Button
              variant="outlined"
              sx={{ mr: 8 }}
              onClick={() => {
                authStore.isAuthicated = false;
              }}
            >
              Выход
            </Button>
          </Paper>
          <Paper sx={{ p: 2, mt: 4, mb: 4 }}>Способ оплаты</Paper>
          <Paper sx={{ p: 2, mt: 4, mb: 4 }}>Чеки</Paper>
        </Box>
      </Box>
    </Paper>
  );
});
