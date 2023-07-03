function responsive_control() {
  let x = document.getElementById("myTopnav");
  let activeSection = document.getElementById("active-section");

  if (x.className === "topnav") {
    x.className += " responsive";
    activeSection.innerHTML = ''; // Remove existing content
    activeSection.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/yGVwYtHtzsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; // Add YouTube video
  } else {
    x.className = "topnav";
    activeSection.innerHTML = ''; // Remove existing content
    activeSection.innerHTML = '<img src="img/cover.jpg" style="width: 100%; height: auto;">'; // Add image
  }
}
