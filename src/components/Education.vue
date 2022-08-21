<template>
  <div id="education" class="education-background">
    <div class="container mx-auto pt-24 pb-12 gap-6">
      <div class="relative w-full h-fit bg-white rounded-[10px]">
        <div class="flex flex-col justify-center items-start gap-[30px] w-full h-full py-[30px] px-[30px] sm:py-[45px] sm:px-[70px] xl:w-9/12 ">
          <div class="block-title text-dark">Education</div>
          <div class="text-dark block-content">
            <div>國立高雄師範大學 軟體工程學系</div>
            <div>2012 - 2016</div>
          </div>
          <div class="text-dark block-content break-words">論文發表 @ 2015 IEEE 4th Global Conference on Consumer Electronics (GCCE)</div>
          <a target="_blank" href="https://ieeexplore.ieee.org/document/7398726" class="button grid grid-cols-[40px_auto] justify-center items-center p-[15px] bg-dark rounded-[4px] 2xl:w-9/12">
            <div class="link-image"></div>
            <div class="text-white break-words w-full block-content text-left uppercase">A comparison of Python and Java capabilities on somatosensory game for cloud-based rehabilitation system</div>
          </a>
        </div>
        <img class="image absolute top-[-40px] right-[50px] z-10 hidden xl:block" src="../assets/education.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.education-background {
  background: linear-gradient(180deg, rgba(35, 37, 55, 0) 0%, #232537 100%);
}
</style>
