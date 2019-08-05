<template>
<div class="container" style="margin-top:40px;">
        <div class="row">
        <div class="col-md-8">
            <div class="jumbotron">
                <carousel :data="data"></carousel>
            </div>
            <h4>Host</h4>
        </div>
        <div class="col-md-4">
            <div class="jumbotron">
                this is right
            </div>
        </div>
        </div>
        

    </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<img src="https://files.selenago.com/sandbox/fc88e09f-5eed-4b35-8ddc-8f87695dafa7.jpg">',
          '<img src="https://files.selenago.com/sandbox/fc88e09f-5eed-4b35-8ddc-8f87695dafa7.jpg">',
          '<img src="https://files.selenago.com/sandbox/fc88e09f-5eed-4b35-8ddc-8f87695dafa7.jpg">'
        ],
      };
    }
}
</script>

<style scoped>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>
