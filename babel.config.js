<<<<<<< HEAD
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
>>>>>>> d52c1f7337cdb8b9aa2041ccf278ec5dacac5ffc
  };
};
