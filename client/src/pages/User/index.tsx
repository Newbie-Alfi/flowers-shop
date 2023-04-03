import { api } from "@entities/api";
import { Box, Paper, Button, Divider } from "@mui/material";
import { useApi } from "@shared/api";
import { authStore } from "@shared/stores/authStore";
import { KeyValueContainer } from "@shared/ui/KeyValueContainer/KeyValueContainer";
import { observer } from "mobx-react-lite";

export const UserPage = observer(() => {
  const { value } = useApi(api.buyers.getOne);

  return (
    <Paper sx={{ p: 2, mb: 4 }}>
      {value && (
        <Box sx={{}} display="flex" flexDirection="column">
          <Box display="flex" sx={{ flexWrap: "wrap", gap: 3 }}>
            <Paper
              sx={{
                p: 4,
                minWidth: 240,
                flexDirection: "column",
                display: "flex",
              }}
            >
              <KeyValueContainer
                name="ФИО"
                value={`${value?.data.first_name} ${value?.data.last_name}`}
              />
              <KeyValueContainer name="Номер" value={value.data.phone_number} />
              <KeyValueContainer name="Email" value={value.data.email} />
              <KeyValueContainer
                name="Пол"
                value={value.data.is_male ? "Муж." : "Жен."}
              />
              <Divider sx={{ mb: 2 }} />
              <Button variant="text" size="small" onClick={authStore.logout}>
                Выход
              </Button>
            </Paper>
          </Box>
        </Box>
      )}
    </Paper>
  );
});
