function expand() {
    const topNav = document.getElementById("top-nav");
    if (topNav.className.includes("expand")) {
      topNav.classList.remove("expand");
    } else topNav.classList.add("expand");
  }