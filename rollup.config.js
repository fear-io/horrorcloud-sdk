import babel from 'rollup-plugin-babel';

export default {
  input: 'sdk.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: "HorrorCloudSDK",
  },
  plugins: [
    babel({
      presets: ['@babel/preset-env'],
    }),
  ],
};
