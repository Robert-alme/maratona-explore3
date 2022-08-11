const article = document.querySelector("#content");
function showMore() {
    if (article.className == "open") {
      // ler menos
      article.className = "";
      button.innerHTML = "Show more"; // Mostrar mais
    } else {
      // ler mais
      article.className = "open";
      button.innerHTML = "Show less"; // Mostrar menos
    }
 }