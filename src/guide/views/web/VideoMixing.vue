<template>
  <el-main>
    <el-row style="width: 720px; margin: 0 auto">
      <url-input v-model="url" :list="$videoList"></url-input>
      <el-divider content-position="left">Video</el-divider>
      <video
        ref="localVideo"
        class="video-item"
        :src="url"
        muted
        controls
        loop
        autoplay
      ></video>

      <el-col :span="24">
        <audio
          ref="localAudio"
          src="/assets/medias/jinli.mp3"
          muted
          controls
          autoplay
        ></audio>
        <el-button type="primary" @click="startMixing">开始混音</el-button>
      </el-col>

      <StreamTracks v-model="videoStream"></StreamTracks>

      <video
        ref="playVideo"
        class="video-item"
        :src="url"
        controls
        loop
        autoplay
      ></video>
      <StreamTracks v-model="remixStream"></StreamTracks>
    </el-row>
  </el-main>
</template>
<script>
import StreamTracks from "./../../components/StreamTracks";
export default {
  name: "VideoMixing",
  components: {
    StreamTracks,
  },
  data() {
    return {
      url: null,
      videoStream: null,
      audioStream: null,
      remixStream: null,
    };
  },
  mounted() {
    const that = this;
    const video = this.$refs.localVideo;
    video.addEventListener("canplay", () => {
      console.log("----- video  canplay");
      that.videoStream = this.getMediaStream(video);
    });

    const audio = this.$refs.localAudio;
    audio.addEventListener("canplay", () => {
      console.log("----- audio  canplay");
      that.audioStream = this.getMediaStream(audio);
    });
  },
  methods: {
    getMediaStream(video) {
      const fps = 0;
      var stream = null;
      if (video.captureStream) {
        stream = video.captureStream(fps);
      } else if (video.mozCaptureStream) {
        stream = video.mozCaptureStream(fps);
      } else {
        console.error("Stream capture is not supported");
        stream = null;
      }
      stream.onaddtrack = (event) => {
        console.log("track add", event);
      };

      stream.onremovetrack = (event) => {
        console.log("track remove", event);
      };

      stream.onended = () => {
        console.log("stream on end");
      };
      return stream;
    },
    startMixing() {
      //   this.audioStream.getAudioTracks().forEach((track) => {
      //     console.log('音频轨道添加');
      //     this.videoStream.addTrack(track.clone());
      //   });

      this.remixStream = new MediaStream();
      this.videoStream.getVideoTracks().forEach((track) => {
        this.remixStream.addTrack(track.clone());
      });

      this.audioStream.getAudioTracks().forEach((track) => {
        this.remixStream.addTrack(track.clone());
        track.enabled = false;
      });

      this.videoStream.getAudioTracks().forEach((track) => {
        this.remixStream.addTrack(track.clone());
        track.enabled = false;
      });

      console.log(this.remixStream.audioTracks);
      const video = this.$refs.playVideo;
      video.srcObject = this.remixStream;
      video.play();
    },
  },
};
</script>
<style lang="stylus" scoped>
.video-item {
  background: #999;
  width: 100%;
  background: #333;
  margin-right: 10px;
}
</style>
