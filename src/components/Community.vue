<template>
  <div id="community" class="container mx-auto pt-24 pb-12 gap-6">
      <h1 class="text-white pb-[25px]">Community</h1>
      <div class="xl:relative w-full xl:h-[455px]">
        <img id="mopcon-image" class="xl:mopcon-image-xl rounded-[5px] mb-[10px]" src="./../assets/mopcon.jpeg" width="500" />
        <div id="mopcon" class="xl:mopcon-xl sm:w-[580px] h-[300px] flex flex-col justify-center items-center gap-5 p-[30px] z-10 rounded-[5px] bg-white">
          <div class="w-full flex justify-center items-center">
            <div class="image hidden sm:block w-[80px] h-[80px]"></div>
            <h2 class="text-dark items-center px-[10px]">MOPCON @2019</h2>
          </div>
          <div class="block-content text-dark">KKBOX 攤位技術短講</div>
          <a target="_blank" href="https://docs.google.com/presentation/d/1l-RSQMaiDUlmYvGjcLc4u3C1C_prd_MT/edit?usp=sharing&ouid=117122055341853595075&rtpof=true&sd=true" class="button grid grid-cols-[40px_auto] justify-center items-center p-[15px] bg-dark rounded-[4px] 2xl:w-9/12">
            <div class="link-image"></div>
            <div class="text-white break-words w-full block-content text-left uppercase">15 分鐘了解 KKBOX 怎麼算排行榜</div>
          </a>
        </div>
      </div>
  </div>
</template>

<style scoped>
.image {
  background-image: url(../assets/icons.svg);
  background-repeat: no-repeat;
  background-size: 468px;
  background-position: -193px 0px;
}
</style>
