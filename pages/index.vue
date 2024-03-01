<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" theme="dark">
            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn variant="text"> Listen Now </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="#1F7087" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Supermodel </v-card-title>

                <v-card-subtitle>Foster the People</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="#952175" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Halcyon Days </v-card-title>

                <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <div class="container">
    <div class="cube">
      <div class="face front">Solverde</div>
      <div class="face back">Exciting Offers</div>
      <div class="face left">Win Big!</div>
      <div class="face right">Play Now</div>
      <div class="face top">Welcome Bonus</div>
      <div class="face bottom">Join Us</div>
    </div>
  </div>
</template>
<style scoped>
span {
  font-family: monospace;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.container {
  perspective: 1000px;
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(45deg);
  animation: rotateCube 5s infinite linear;
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #3498db;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.front {
  transform: translateZ(100px);
}
.back {
  transform: rotateY(180deg) translateZ(100px);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}
.right {
  transform: rotateY(90deg) translateZ(100px);
}
.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

@keyframes rotateCube {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
  to {
    transform: rotateX(45deg) rotateY(405deg);
  }
}
</style>
