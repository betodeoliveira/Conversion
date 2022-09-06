var dateclass = "translate-date";

$(".pagination_button").on("click", function () {
  setTimeout(translateDate, 1000);
});

$(".pagination_page-btn-wrapper").on("click", function () {
  setTimeout(translateDate, 1000);
});

$(document).ready(function () {
  translateDate();
});

function translateDate() {
  var wfdc = $("." + dateclass);

  wfdc.each(function () {
    var wfdctxt = $(this).text();

    var monthsEn = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    var monthsPtbr = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo"
    ];

    for (var i = 0; i < monthsEn.length; i++) {
      wfdctxt = wfdctxt.replace(monthsEn[i], monthsPtbr[i]);
    }

    $(this).text(wfdctxt);
  });
}