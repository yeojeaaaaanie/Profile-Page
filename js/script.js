function showImage(imgName) {
  document.getElementById('largeImg').src = imgName;
  showLargeImagePanel();
}

function showLargeImagePanel() {
  document.getElementById('largeImgPanel').style.visibility = 'visible';
}

function hideMe(obj) {
  obj.style.visibility = 'hidden';
}
