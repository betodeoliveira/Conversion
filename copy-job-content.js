function UpdateAreaInteresse(elemento) {
    // Gets the element that will receive the content about the job offer
    let vagaConteudo = document.getElementById("vaga-conteudo");
    // The custom code is placed inside an embed objt so we select it
    let elementParent = elemento.parentNode;
    // Then we select the parent of the entire cms item
    elementParent = elementParent.parentNode;
    // We find the element that has the content about the job offer
    for (var i = 0; i < elementParent.childNodes.length; i++) {
      // console.log(elementParent.childNodes[i].className);
      if (
        elementParent.childNodes[i].className ==
        "text-rich-text is-vaga-hide w-richtext"
      ) {
        // Now we update the element content
        vagaConteudo.innerHTML = elementParent.childNodes[i].innerHTML;
        break;
      }
    }
  }  