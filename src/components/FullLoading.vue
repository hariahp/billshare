<template>
  <div class="fsloading">
    <div class="fsM">
      <div class="fsText">{{ showMessage }}</div>
      <div v-show="show.chrome" class="infinityChrome">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- Safari and others -->
      <div v-show="show.others" class="infinity">
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fsloading {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(48, 49, 51, 0.8);
  color: #fff;
  font-size: 25px;
  text-align: center;
  display: table;
}

.fsM {
  display: table-cell;
  vertical-align: middle;
}

.fsM div {
  margin-left: auto;
  margin-right: auto;
}

.infinity {
  width: 120px;
  height: 60px;
  position: relative;
}

.infinity div,
.infinity span {
  position: absolute;
}

.infinity div {
  top: 0;
  left: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: rotate 6.9s linear infinite;
  animation: rotate 6.9s linear infinite;
}

.infinity div span {
  left: -8px;
  top: 50%;
  margin: -8px 0 0 0;
  width: 16px;
  height: 16px;
  display: block;
  background: #8c6ff0;
  box-shadow: 2px 2px 8px rgba(140, 111, 240, 0.09);
  border-radius: 50%;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: move 6.9s linear infinite;
  animation: move 6.9s linear infinite;
}

.infinity div span:before,
.infinity div span:after {
  content: "";
  position: absolute;
  display: block;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background: inherit;
  top: 50%;
  left: 50%;
  margin: -7px 0 0 -7px;
  box-shadow: inherit;
}

.infinity div span:before {
  -webkit-animation: drop1 0.8s linear infinite;
  animation: drop1 0.8s linear infinite;
}

.infinity div span:after {
  -webkit-animation: drop2 0.8s linear infinite 0.4s;
  animation: drop2 0.8s linear infinite 0.4s;
}

.infinity div:nth-child(2) {
  -webkit-animation-delay: -2.3s;
  animation-delay: -2.3s;
}

.infinity div:nth-child(2) span {
  -webkit-animation-delay: -2.3s;
  animation-delay: -2.3s;
}

.infinity div:nth-child(3) {
  -webkit-animation-delay: -4.6s;
  animation-delay: -4.6s;
}

.infinity div:nth-child(3) span {
  -webkit-animation-delay: -4.6s;
  animation-delay: -4.6s;
}

.infinityChrome {
  width: 128px;
  height: 60px;
}

.infinityChrome div {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #8c6ff0;
  box-shadow: 2px 2px 8px rgba(140, 111, 240, 0.09);
  border-radius: 50%;
  -webkit-animation: moveSvg 6.9s linear infinite;
  animation: moveSvg 6.9s linear infinite;
  -webkit-filter: url(#goo);
  filter: url(#goo);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  offset-path: path(
    "M64.3636364,29.4064278 C77.8909091,43.5203348 84.4363636,56 98.5454545,56 C112.654545,56 124,44.4117395 124,30.0006975 C124,15.5896556 112.654545,3.85282763 98.5454545,4.00139508 C84.4363636,4.14996252 79.2,14.6982509 66.4,29.4064278 C53.4545455,42.4803627 43.5636364,56 29.4545455,56 C15.3454545,56 4,44.4117395 4,30.0006975 C4,15.5896556 15.3454545,4.00139508 29.4545455,4.00139508 C43.5636364,4.00139508 53.1636364,17.8181672 64.3636364,29.4064278 Z"
  );
}

.infinityChrome div:before,
.infinityChrome div:after {
  content: "";
  position: absolute;
  display: block;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background: inherit;
  top: 50%;
  left: 50%;
  margin: -7px 0 0 -7px;
  box-shadow: inherit;
}

.infinityChrome div:before {
  -webkit-animation: drop1 0.8s linear infinite;
  animation: drop1 0.8s linear infinite;
}

.infinityChrome div:after {
  -webkit-animation: drop2 0.8s linear infinite 0.4s;
  animation: drop2 0.8s linear infinite 0.4s;
}

.infinityChrome div:nth-child(2) {
  -webkit-animation-delay: -2.3s;
  animation-delay: -2.3s;
}

.infinityChrome div:nth-child(3) {
  -webkit-animation-delay: -4.6s;
  animation-delay: -4.6s;
}

@-webkit-keyframes moveSvg {
  0% {
    offset-distance: 0%;
  }
  25% {
    background: #5628ee;
  }
  75% {
    background: #23c4f8;
  }
  100% {
    offset-distance: 100%;
  }
}

@keyframes moveSvg {
  0% {
    offset-distance: 0%;
  }
  25% {
    background: #5628ee;
  }
  75% {
    background: #23c4f8;
  }
  100% {
    offset-distance: 100%;
  }
}

@-webkit-keyframes rotate {
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    margin-left: 0;
  }
  50.0001%,
  100% {
    margin-left: -60px;
  }
}

@keyframes rotate {
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    margin-left: 0;
  }
  50.0001%,
  100% {
    margin-left: -60px;
  }
}

@-webkit-keyframes move {
  0%,
  50% {
    left: -8px;
  }
  25% {
    background: #5628ee;
  }
  75% {
    background: #23c4f8;
  }
  50.0001%,
  100% {
    left: auto;
    right: -8px;
  }
}

@keyframes move {
  0%,
  50% {
    left: -8px;
  }
  25% {
    background: #5628ee;
  }
  75% {
    background: #23c4f8;
  }
  50.0001%,
  100% {
    left: auto;
    right: -8px;
  }
}

@-webkit-keyframes drop1 {
  100% {
    -webkit-transform: translate(32px, 8px) scale(0);
    transform: translate(32px, 8px) scale(0);
  }
}

@keyframes drop1 {
  100% {
    -webkit-transform: translate(32px, 8px) scale(0);
    transform: translate(32px, 8px) scale(0);
  }
}

@-webkit-keyframes drop2 {
  0% {
    -webkit-transform: translate(0, 0) scale(0.9);
    transform: translate(0, 0) scale(0.9);
  }
  100% {
    -webkit-transform: translate(32px, -8px) scale(0);
    transform: translate(32px, -8px) scale(0);
  }
}

@keyframes drop2 {
  0% {
    -webkit-transform: translate(0, 0) scale(0.9);
    transform: translate(0, 0) scale(0.9);
  }
  100% {
    -webkit-transform: translate(32px, -8px) scale(0);
    transform: translate(32px, -8px) scale(0);
  }
}
</style>

<script>
export default {
  name: "FullScreenLoading",
  props: ["message"],
  data() {
    return {
      show: {
        chrome: true,
        others: false
      },
      showMessage: ""
    };
  },
  mounted() {
    if (
      !/Chrome/.test(navigator.userAgent) &&
      /Google Inc/.test(navigator.vendor)
    ) {
      this.show.chrome = false;
      this.show.others = true;
    }
    if (!this.message) {
      this.showMessage = "Checking your Identity";
    } else {
      this.showMessage = this.message;
    }
  }
};
</script>
