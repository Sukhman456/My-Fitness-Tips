const { src, dest, watch, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// 🔹 CSS Task
function css() {
  return src('css/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist/css'));
}

// 🔹 JS Task
function js() {
  return src('js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

// 🔹 Image Task
function images() {
  return src('image2/*')
    .pipe(imagemin())
    .pipe(dest('dist/image2'));
}

// 🔹 Watch Task
function watcher() {
  watch('css/*.css', css);
  watch('js/*.js', js);
  watch('image2/*', images);
}

// 🔹 DEFAULT TASK (IMPORTANT FIX)
exports.default = series(css, js, images, watcher);