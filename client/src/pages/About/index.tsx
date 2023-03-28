import { Box, Grid, Typography } from "@mui/material";
import { Map } from "@shared/ui/Map";

export function AboutPage() {
  return (
    <>
      <Box sx={{ width: "100%" }} display="flex" justifyContent="center">
        <Grid container lg={10}>
          <Grid item>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h4">
              Контактная информация
            </Typography>
            <Grid container lg={8} rowSpacing={4}>
              <Grid item>
                <Grid container spacing={6}>
                  <Grid item lg={7}>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      alt="Наша теплица"
                      src="https://avatars.mds.yandex.net/i?id=18722c401d25d13fe1c211ebed335bc4ae66cb8c-7552082-images-thumbs&n=13&exp=1"
                    />
                  </Grid>
                  <Grid item lg={5}>
                    <Typography variant="body1" sx={{ textIndent: "30px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vero atque asperiores veniam nulla. Quisquam voluptatibus
                      minus alias dolores exercitationem nemo, eum, aliquid
                      totam hic velit veniam? Distinctio sunt eaque cupiditate.
                      Error, officia. Eos culpa magni dolores voluptas. Ab
                      labore corporis consectetur, minus suscipit laborum quo
                      nesciunt provident accusantium laudantium commodi tempora
                      optio velit animi a repudiandae veritatis at cupiditate
                      consequatur! Dolorum sequi animi tenetur harum delectus
                      aspernatur incidunt, enim quidem! Eaque earum autem error
                      reiciendis accusantium temporibus suscipit mollitia porro
                      blanditiis nobis aliquid, totam provident nostrum.
                      Nostrum, molestiae quasi? Odio? Laborum dolor rerum
                      explicabo iure maxime odit veniam eius eveniet nam
                      obcaecati atque assumenda nulla sint minus molestias
                      quisquam, illum distinctio eos dignissimos culpa.
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h4">
                  Наши сотрудники
                </Typography>
                <Grid container spacing={6}>
                  <Grid item lg={5}>
                    <Typography variant="body1" sx={{ textIndent: "30px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vero atque asperiores veniam nulla. Quisquam voluptatibus
                      minus alias dolores exercitationem nemo, eum, aliquid
                      totam hic velit veniam? Distinctio sunt eaque cupiditate.
                      Error, officia. Eos culpa magni dolores voluptas. Ab
                      labore corporis consectetur, minus suscipit laborum quo
                      nesciunt provident accusantium laudantium commodi tempora
                      optio velit animi a repudiandae veritatis at cupiditate
                      consequatur! Dolorum sequi animi tenetur harum delectus
                      aspernatur incidunt, enim quidem! Eaque earum autem error
                      reiciendis accusantium temporibus suscipit mollitia porro
                      blanditiis nobis aliquid, totam provident nostrum.
                      Nostrum, molestiae quasi? Odio? Laborum dolor rerum
                      explicabo iure maxime odit veniam eius eveniet nam
                      obcaecati atque assumenda nulla sint minus molestias
                      quisquam, illum distinctio eos dignissimos culpa.
                    </Typography>
                  </Grid>
                  <Grid item lg={7}>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      alt="Наша теплица"
                      src="https://avatars.mds.yandex.net/i?id=18722c401d25d13fe1c211ebed335bc4ae66cb8c-7552082-images-thumbs&n=13&exp=1"
                    />
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h4">
                  Наши теплицы
                </Typography>
                <Grid container spacing={6}>
                  <Grid item lg={7}>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      alt="Наша теплица"
                      src="https://avatars.mds.yandex.net/i?id=18722c401d25d13fe1c211ebed335bc4ae66cb8c-7552082-images-thumbs&n=13&exp=1"
                    />
                  </Grid>
                  <Grid item lg={5}>
                    <Typography variant="body1" sx={{ textIndent: "30px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vero atque asperiores veniam nulla. Quisquam voluptatibus
                      minus alias dolores exercitationem nemo, eum, aliquid
                      totam hic velit veniam? Distinctio sunt eaque cupiditate.
                      Error, officia. Eos culpa magni dolores voluptas. Ab
                      labore corporis consectetur, minus suscipit laborum quo
                      nesciunt provident accusantium laudantium commodi tempora
                      optio velit animi a repudiandae veritatis at cupiditate
                      consequatur! Dolorum sequi animi tenetur harum delectus
                      aspernatur incidunt, enim quidem! Eaque earum autem error
                      reiciendis accusantium temporibus suscipit mollitia porro
                      blanditiis nobis aliquid, totam provident nostrum.
                      Nostrum, molestiae quasi? Odio? Laborum dolor rerum
                      explicabo iure maxime odit veniam eius eveniet nam
                      obcaecati atque assumenda nulla sint minus molestias
                      quisquam, illum distinctio eos dignissimos culpa.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Map />
    </>
  );
}
