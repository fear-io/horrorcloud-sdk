import babel from 'rollup-plugin-babel';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'HorrorCloudSDK',
  },
  plugins: [
    babel({
      presets: ['@babel/preset-env'],
    }),
  ],
};
