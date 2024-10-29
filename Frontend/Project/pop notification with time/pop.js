function show() {
    const notification = document.querySelector(".text");
  
    notification.style.visibility = "visible";
  
    setTimeout(() => {
      notification.style.visibility = "hidden";
    }, 5000);
  }