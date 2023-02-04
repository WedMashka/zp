"use strict"



((basePrem * 0.6 * kpiKachestva) + (basePrem * 0.2 * kpiSglaschiv) + (basePrem * 0.2 * tainiKlient))

((basePrem * 0.7 * kpiKachestva) + (basePrem * 0.3 * kpiSglaschiv))

(basePrem * reshenieVoprosa) + (basePrem * transfer) + (basePrem * csat)

function count() {
      let basePrem = Number(document.getElementById('basePremiumRate').value);

      let kpiKachestva = Number(document.getElementById('kpiKachestva').value);

      let kpiSglaschiv = Number(document.getElementById('kpiSglaschivaniya').value);

      let tainiKlient = Number(document.getElementById('tainiKlient').value);

      let csat = Number(document.getElementById('csat').value);

      let reshenieVoprosa = Number(document.getElementById('reshenieVoprosa').value);

      let transfer = Number(document.getElementById('transfer').value);

      let result = document.getElementById('resultPrem').innerHTML;

   let x = ((basePrem * 0.6 * kpiKachestva) + (basePrem * 0.2 * kpiSglaschiv) + (basePrem * 0.2 * tainiKlient));
   let p =


}