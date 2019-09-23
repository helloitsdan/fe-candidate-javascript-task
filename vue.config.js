module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/sass/framework/framework";
          @import "@/sass/ui/ui";
        `
      }
    }
  }
}
